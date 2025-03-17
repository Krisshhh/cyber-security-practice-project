# Secure Contact Form API

This project is a secure contact form API built using Node.js, Express, and MongoDB. It supports HTTPS and allows users to submit messages via a frontend form.

## Features
- Secure HTTPS server with SSL certificates
- MongoDB integration for message storage
- Express-based API for handling form submissions
- Basic frontend with HTML, CSS, and JavaScript
- CORS support for cross-origin requests
- Docker support for containerized deployment

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance running
- OpenSSL for generating SSL certificates (or use a trusted CA-signed certificate)
- Docker and Docker Compose installed (for containerized deployment)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Krisshhh/cyber-security-practice-project.git
   cd cyber-security-practice-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```sh
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```
4. Generate SSL certificates (if not using a CA-signed certificate):
   ```sh
   openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.cert -days 365 -nodes
   ```

## Usage

### Start the Server
```sh
npm start
```

The server will run on:
- HTTPS: `https://localhost:443`
- HTTP (redirected to HTTPS): `http://localhost:5000`

### Run with Docker
1. Build and start the containers:
   ```sh
   docker-compose up --build
   ```
2. Stop the containers:
   ```sh
   docker-compose down
   ```

## API Endpoints

### POST `/api/messages`
Saves a message to the database.
#### Request Body (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```
#### Response:
```json
{
  "success": true,
  "message": "Message saved!"
}
```

## Project Structure
```
docker_prac1/
│── backend/
│   │── config/
│   │   ├── db.js
│   │── models/
│   │   ├── Message.js
│   │── node_modules/
│   │── routes/
│   │   ├── messages.js
│   │── .env
│   │── Dockerfile
│   │── package.json
│   │── package-lock.json
│   │── server.js
│   │── server.cert
│   │── server.key
│
│── frontend/
│   │── Dockerfile
│   │── index.html
│   │── script.js
│   │── style.css
│
│── .gitignore
│── docker-compose.yml
│── vercel.json
```

## Frontend
The frontend consists of a basic HTML form with CSS styling and JavaScript to send data via `fetch` to the API.

## License
This project is licensed under the MIT License.

