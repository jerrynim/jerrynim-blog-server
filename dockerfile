FROM mhart/alpine-node:10.16.3

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "start"]