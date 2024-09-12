# Dockerfile
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn build

CMD ["node", "dist/main"]
