FROM node:18-alpine
LABEL authors="milan gress"

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Start the application
ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "start"]
