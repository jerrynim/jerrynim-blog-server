import { prisma } from "../../generated/prisma-client";

export default {
  Post: {
    tags: ({ id }) => prisma.post({ id }).tags(),
    comments: ({ id }) => prisma.post({ id }).comments()
  }
};
