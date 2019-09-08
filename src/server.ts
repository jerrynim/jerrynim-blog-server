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
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
