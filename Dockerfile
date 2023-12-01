FROM node:18-alpine as build
WORKDIR /build
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine as production
WORKDIR /app
COPY package*.json .
COPY --from=build /build/dist /app

EXPOSE 3000
CMD ["node", "--experimental-modules", "/app/server.js"]

