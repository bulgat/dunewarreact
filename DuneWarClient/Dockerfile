# ---- Stage 1: Build the React application ----
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY public/ public/
COPY src/ src/
RUN npm run build

# ---- Stage 2: Serve the static files with nginx ----
FROM nginx:1.27-alpine AS runtime

# Custom nginx config with SPA fallback for react-router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]