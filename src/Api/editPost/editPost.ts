import { EditPostMutationArgs } from "../../../types/graph";
import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    editPost: async (_, args: EditPostMutationArgs) => {
      const { postId, title, subTitle, content, tags } = args;
      try {
        await prisma.deletePost({
          id: postId
        });
        return true;
      } catch (e) {
        throw Error(e.message);
        return false;
      }
    }
  }
};
