import { GraphQLServerLambda } from "graphql-yoga";
import schema from "./schema";
const lambda = new GraphQLServerLambda({ schema });
const port = process.env.PORT || 4000;

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
