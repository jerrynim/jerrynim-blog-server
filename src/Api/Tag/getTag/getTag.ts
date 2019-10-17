import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getTag: async (_, args) => {
      const { term } = args;
      const tag = await prisma.tag({ term });
      return tag;
    }
  }
};
