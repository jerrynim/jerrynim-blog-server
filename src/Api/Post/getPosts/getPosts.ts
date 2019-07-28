import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getPosts: async () => {
      try {
        return await prisma.posts({ first: 10 });
      } catch (e) {
        throw Error(e.message);
      }
    }
  }
};