FROM node:18-alpine

WORKDIR /my-playlist-share-front

COPY app/package*.json ./
RUN npm ci

COPY app/ ./

RUN apk update

CMD ["npm", "run", "dev"]