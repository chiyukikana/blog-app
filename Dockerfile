FROM nginx:latest

WORKDIR /usr/share/nginx/html/
USER root

COPY ./dist /usr/share/nginx/html/

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]