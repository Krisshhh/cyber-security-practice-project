require("dotenv").config();
const fs = require("fs");
const https = require("https");
const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
const HTTPS_PORT = 443; // HTTPS runs on port 443 by default

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/messages", require("./routes/messages"));

app.get("/", (req, res) => {
  res.send("API is running securely...");
});

// Load SSL Certificates
const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert")
};

// Start HTTPS Server
https.createServer(options, app).listen(HTTPS_PORT, () => {
  console.log(`Server is running on https://localhost:${HTTPS_PORT}`);
});

// Optional: Redirect HTTP to HTTPS
http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(PORT, () => {
  console.log(`Redirecting HTTP (port ${PORT}) to HTTPS`);
});