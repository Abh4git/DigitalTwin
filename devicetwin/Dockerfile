FROM node:15.3-buster AS build


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 8082


CMD npm start