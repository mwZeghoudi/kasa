FROM node:19.9.0-alpine
WORKDIR /kasa
COPY package.json .
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]