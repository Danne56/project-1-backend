# Build stage - compiles the application
FROM node:lts AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Runtime stage - serves the static files
FROM node:current-alpine AS runtime
WORKDIR /app
COPY --from=base ./app .
EXPOSE 3000
CMD ["node", "index.js"]