# Docker
- Create a Dockerfile　

      vi Dockerfile

- Build an image from a Dockerfile

      docker build .

- Create an dockerignore 
     
      vi .dockerignore

- Check images

      docker images
      
- Run

      docker run -p 1337:1337 -d a2d34b5bd4b1
      

- Dockerfile sample

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