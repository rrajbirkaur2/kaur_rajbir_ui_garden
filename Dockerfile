# Use Node 20
FROM node:20-alpine

# Set working directory
WORKDIR /kaur_rajbir_ui_garden

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose dev server port
EXPOSE 6006
