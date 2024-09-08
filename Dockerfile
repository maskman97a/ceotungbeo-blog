# Stage 1: Build the React app
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app
FROM nginx:stable-alpine

# Copy the build output to the nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]