FROM node:latest

WORKDIR /usr/src/app

ENV LOG_LEVEL="TRACE"
ENV NODE_ENV="development"

EXPOSE 4200

CMD ["./docker-dev.sh"]