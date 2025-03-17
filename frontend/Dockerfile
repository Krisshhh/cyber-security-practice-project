# Use an official Nginx image
FROM nginx:alpine

# Copy frontend build files to Nginx public folder
COPY . /usr/share/nginx/html

# Expose frontend port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]