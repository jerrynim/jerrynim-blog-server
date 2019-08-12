import { AddCommentMutationArgs } from "../../../../types/graph.d";
import { prisma } from "../../../generated/prisma-client/index";

export default {
  Mutation: {
    addComment: async (_, args: AddCommentMutationArgs) => {
      const { postId, nickname, text } = args;
      try {
        await prisma.createComment({
          text,
          nickname,
          post: {
            connect: {
              id: postId
            }
          }
        });
        return true;
      } catch (e) {
        throw Error(e.message);
      }
    }
  }
};
