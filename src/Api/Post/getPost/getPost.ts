import { GetPostQueryArgs } from "../../../../types/graph.d";
import { prisma } from "../../../generated/prisma-client/index";

export default {
  Query: {
    getPost: async (_, args: GetPostQueryArgs) => {
      const { title } = args;
      const posts = await prisma.posts({ where: { title: title } });
      console.log(posts);
      return posts[0];
    }
  }
};
