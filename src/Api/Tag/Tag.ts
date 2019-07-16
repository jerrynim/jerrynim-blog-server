import { prisma } from "../../generated/prisma-client";

export default {
  Tag: {
    posts: ({ id }) => prisma.tag({ id }).posts()
  }
};
