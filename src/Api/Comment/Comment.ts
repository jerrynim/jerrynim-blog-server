import { prisma } from "../../generated/prisma-client";

export default {
  Comment: {
    post: ({ id }) => prisma.comment({ id }).post()
  }
};
