FROM node:latest

WORKDIR /usr/src/app

ENV PORT=8080
ENV LOG_LEVEL="INFO"

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]