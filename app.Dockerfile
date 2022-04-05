FROM mhart/alpine-node:14
WORKDIR /app
COPY ./build/server .
ENTRYPOINT [ "node", "server.js" ]