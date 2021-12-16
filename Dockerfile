# install all node_modules, including dev
FROM node:16-alpine as deps

RUN mkdir /app/
WORKDIR /app/

ADD package.json package-lock.json ./
RUN npm install --production=false

# build app
FROM node:16-alpine as build

ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA
ENV NODE_ENV=production

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules

# app code changes all the time
ADD . .
RUN npm run build

# build smaller image for running
FROM denoland/deno:1.16.4

RUN mkdir /app/
WORKDIR /app/

COPY --from=build /app/dist /app/dist
COPY --from=build /app/public /app/public

RUN deno cache ./dist/entry.js

EXPOSE 8000
CMD ["run", "--allow-net", "--allow-read", "./dist/entry.js"]