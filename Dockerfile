FROM node

ARG arch=arm
ENV ARCH=$arch

EXPOSE 9378

CMD ["node","nodeserver.js"]
