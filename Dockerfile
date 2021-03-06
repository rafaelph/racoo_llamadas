FROM node:14.15 AS node
WORKDIR /app
COPY ./front .
RUN npm install
RUN npm run build

FROM node:14.15
WORKDIR /app
COPY ./api .
RUN npm install
COPY --from=node /app/build ./public/
ENV PORT 3000
EXPOSE $PORT
CMD node "bin/www"

