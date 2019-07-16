import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getTags: async () => {
      try {
        return prisma.tags({ first: 10 });
      } catch (e) {
        throw Error(e.message);
      }
    }
  }
};
