FROM node:19.9.0-alpine
WORKDIR /kasa
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]