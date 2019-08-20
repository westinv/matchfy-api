FROM node:latest
MAINTAINER Victor Elioenay
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT sails lift
EXPOSE 1337
