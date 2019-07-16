import { DeletePostMutationArgs } from "../../../types/graph";
import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deletePost: async (_, args: DeletePostMutationArgs) => {
      const { postId } = args;
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
