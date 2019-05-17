FROM node

ARG arch=arm
ENV ARCH=$arch

WORKDIR /usr/src/app
COPY nodeserver.js .
COPY www/ .

EXPOSE 9378

CMD ["node","nodeserver.js"]
