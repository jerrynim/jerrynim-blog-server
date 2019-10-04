import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getTag: async (_, args) => {
      const { id } = args;
      const tag = await prisma.tag({ id });
      return tag;
    }
  }
};
