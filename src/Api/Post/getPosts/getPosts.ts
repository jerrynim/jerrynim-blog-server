import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getPosts: async () => {
      try {
        const result = await prisma.posts({ first: 10 });
        console.log(result);
        return result;
      } catch (e) {
        throw Error(e.message);
      }
    }
  }
};
