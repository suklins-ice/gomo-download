# Build stage
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package.json & lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build production
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
