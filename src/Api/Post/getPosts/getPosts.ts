import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getPosts: async () => {
      return await prisma.posts({ first: 10 });
    }
  }
};
