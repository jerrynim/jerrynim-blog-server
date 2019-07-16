import { EditPostMutationArgs } from "../../../../types/graph";
import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    editPost: async (_, args: EditPostMutationArgs) => {
      const { postId, title, subTitle, content, tags } = args;
      try {
        //문자열을 update tags들을 모두 disconnect 해준다.
        const postTags = await prisma.post({ id: postId }).tags();
        postTags.map((tag) => delete tag.term);
        await prisma.updatePost({
          data: {
            title,
            subTitle,
            content,
            tags: {
              disconnect: postTags
            }
          },
          where: {
            id: postId
          }
        });
        //우선 posts tags에서 tag들을 조회 만약 하는것보다 비우고 새로설정하자
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
                id: postId
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
                id: postId
              }
            });
          }
        });
        return true;
      } catch (e) {
        throw Error(e.message);
        return false;
      }
    }
  }
};
