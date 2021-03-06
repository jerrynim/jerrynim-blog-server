import { CreatePostMutationArgs } from "../../../../types/graph";
import { prisma } from "../../../generated/prisma-client";
import cleanNullArgs from "../../../utils/cleanNullArgs";

export default {
  Mutation: {
    createPost: async (_, args: CreatePostMutationArgs): Promise<boolean> => {
      const { title, subTitle, thumbnail, content, tags, password } = args;
      console.log(process.env.PASSWORD);
      if (password === process.env.PASSWORD) {
        try {
          //post를 만든후
          const post = await prisma.createPost({
            title,
            subTitle,
            thumbnail,
            content
          });
          //태그들에 대하여 공백 단위로 나눈다
          const tagArray = tags.split(" ");
          tagArray.map(async (term) => {
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
                      id: newTag.id
                    }
                  }
                },
                where: {
                  id: post.id
                }
              });
            }
          });
          return true;
        } catch (e) {
          throw Error(e.message);
        }
      } else {
        throw Error("wrong password");
      }
    }
  }
};
