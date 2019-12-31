FROM node:alpine as build

WORKDIR /app

COPY . /app

# since we are using local files and not copying them to docker
# add the container's node_modules folder to docker's $PATH
# so that it can find and watch it's dependencies
ENV PATH /app/node_modules/.bin:$PATH

RUN echo $PRISMA_ENDPOINT docker env
RUN yarn && \
    yarn build

CMD ["yarn", "start"]
