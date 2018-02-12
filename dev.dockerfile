FROM angular-chat

ENV LOG_LEVEL="TRACE"
ENV NODE_ENV="development"
ENV PORT=3000

EXPOSE 4200

CMD ["./docker-dev.sh"]