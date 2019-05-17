FROM node

ARG arch=arm
ENV ARCH=$arch

RUN git clone https://github.com/dungtri/zelda30tribute.git .

EXPOSE 9378

CMD ["node","nodeserver.js"]
