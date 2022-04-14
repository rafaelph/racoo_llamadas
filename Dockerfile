FROM node:8.0-alpine AS node
WORKDIR /app
COPY ./front .
RUN npm i
RUN npm run build

FROM node:8
WORKDIR /app
COPY ./api .
RUN npm i
COPY --from=node /app/build ./public/
ENV PORT 3000
EXPOSE $PORT
CMD node "bin/www.js"
