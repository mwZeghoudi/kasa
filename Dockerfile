FROM node:19.9.0-alpine
WORKDIR /kasa
ENTRYPOINT yarn install --no-cache && yarn start
