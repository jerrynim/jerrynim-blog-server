import schema from "./schema";
import { ApolloServer, gql } from "apollo-server-lambda";

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  schema
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
