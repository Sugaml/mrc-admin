FROM node:16-slim AS base
WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .


FROM base AS lint
RUN npm run lint

FROM base AS test
RUN CI=true npm run test
 
FROM base as build
RUN npm run build

CMD ["npm","run","serve"]