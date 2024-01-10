FROM node:lts-alpine

ARG BUILD_MODE

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:$BUILD_MODE


CMD ["npm", "run", "start"]


