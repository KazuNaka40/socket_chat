FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN cd server \
 && npm install \
 && npm run build \
 && cd ../ \
 && npm install \
 && npm run build \
 && cp -r dist server/dist

WORKDIR /usr/src/app/server

EXPOSE 1337
CMD [ "npm", "start" ]


