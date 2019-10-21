FROM nginx:1.17-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY src /var/www

COPY nginx /etc/nginx/conf.d/