import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getTags: async () => {
      try {
        return prisma.tags();
      } catch (e) {
        throw Error(e.message);
      }
    }
  }
};
