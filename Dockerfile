FROM node:12.8.0-alpine

ARG arch=arm
ENV ARCH=$arch

WORKDIR /usr/src/app
COPY nodeserver.js .
COPY www/ .

EXPOSE 9378

CMD ["node","nodeserver.js"]
