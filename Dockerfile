FROM node:18-buster-slim
MAINTAINER chiyukikana<chiyukikana@gmail.com>

RUN yarn global add http-server

WORKDIR /src

COPY ./ ./

RUN yarn install

RUN yarn build

EXPOSE 80

CMD [ "http-server", "dist", "-p", "80" ]