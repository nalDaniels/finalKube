FROM node:14

WORKDIR /app

RUN git clone https://github.com/djtoler/finalKube.git .

WORKDIR /app/react

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]


