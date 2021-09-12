FROM node:alpine3.14

RUN apk add dumb-init

ENV NODE_ENV production

WORKDIR /app

COPY --chown=node:node . /app

RUN yarn install --production

EXPOSE 8080

USER node

CMD ["dumb-init", "node", "server.js"]