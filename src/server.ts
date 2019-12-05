import { ApolloServer } from "apollo-server";
import schema from "./schema";
require("dotenv").config();

const server = new ApolloServer({
  schema,
  formatError: (error): any => {
    console.log(error);
    return error;
  },
  formatResponse: (response): any => {
    console.log(response);
    return response;
  },
  playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(
    "NODE_ENV is",
    process.env.NODE_ENV,
    `🚀  Server ready at ${url}`
  );
});
