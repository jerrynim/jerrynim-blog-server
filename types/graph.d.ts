export const typeDefs = ["type Mutation {\n  addComment(postId: String!): Boolean!\n  createPost(title: String!, subTitle: String, content: String!, tags: [String]): Boolean!\n  deletePost(postId: String!): Boolean!\n  editPost(postId: String!, title: String!, subTitle: String, content: String!, tags: [String]): Boolean!\n}\n\ntype Query {\n  getPost: [Post]\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  subTitle: String\n  content: String!\n  tags: [String!]\n  comments: [String!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Comment {\n  id: ID!\n  post: Post\n  text: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Tag {\n  id: ID!\n  term: String!\n  posts: [Post!]!\n}\n"];
/* tslint:disable */

export interface Query {
  getPost: Array<Post> | null;
}

export interface Post {
  id: string;
  title: string;
  subTitle: string | null;
  content: string;
  tags: Array<string>;
  comments: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  addComment: boolean;
  createPost: boolean;
  deletePost: boolean;
  editPost: boolean;
}

export interface AddCommentMutationArgs {
  postId: string;
}

export interface CreatePostMutationArgs {
  title: string;
  subTitle: string | null;
  content: string;
  tags: Array<string> | null;
}

export interface DeletePostMutationArgs {
  postId: string;
}

export interface EditPostMutationArgs {
  postId: string;
  title: string;
  subTitle: string | null;
  content: string;
  tags: Array<string> | null;
}

export interface Comment {
  id: string;
  post: Post | null;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  term: string;
  posts: Array<Post>;
}
