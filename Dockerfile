# Use the node image
FROM node:latest

# Create a working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Expose the port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
