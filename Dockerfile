# Stage 1: Build Storybook
FROM node:20-alpine AS build

# Set working directory
WORKDIR /rajbir_kaur_ui_garden

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build Storybook
RUN npm run build-storybook

# Stage 2: Serve the Storybook build using 'serve'
FROM node:20-alpine

# Install 'serve' globally
RUN npm install -g serve

# Set working directory
WORKDIR /rajbir_kaur_ui_garden

# Copy the Storybook build from the first stage
COPY --from=build /rajbir_kaur_ui_garden/storybook-static ./storybook-static

# Expose port 8083
EXPOSE 8083

# Start Storybook using 'serve'
CMD ["serve", "-s", "storybook-static", "-l", "8083"]