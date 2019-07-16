import { CreatePostMutationArgs } from "../../../types/graph";
import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    createComment: async (_, args: CreatePostMutationArgs) => {
      const { title, subTitle, content, tags } = args;
      try {
        //post를 만든후
        const post = await prisma.createPost({
          title,
          subTitle,
          content
        });
        //태그들에 대하여
        tags.map(async (term) => {
          //태그유무 확인
          const tag = await prisma.tag({ term });

          if (tag) {
            //기존에 있던 태그라면 post.tags 와 connection
            await prisma.updatePost({
              data: {
                tags: {
                  connect: {
                    id: tag.id
                  }
                }
              },
              where: {
                id: post.id
              }
            });
          } else {
            //없던 태그라면 새로 태그를 만든후 post.tags 와 connection
            const newTag = await prisma.createTag({ term });
            await prisma.updatePost({
              data: {
                tags: {
                  connect: {
                    id: tag.id
                  }
                }
              },
              where: {
                id: post.id
              }
            });
          }
        });
      } catch (e) {
        throw Error(e.message);
        return false;
      }
    }
  }
};
