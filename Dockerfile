# Stage 1: Build the React app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /kaur_rajbir_ui_garden

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the production build using 'serve'
FROM node:20-alpine

# Install 'serve' globally
RUN npm install -g serve

# Set working directory
WORKDIR /kaur_rajbir_ui_garden

# Copy the production build from the first stage
COPY --from=build /kaur_rajbir_ui_garden/build ./build

# Expose port 8083
EXPOSE 8083

# Start the app using 'serve'
CMD ["serve", "-s", "build", "-l", "8083"]