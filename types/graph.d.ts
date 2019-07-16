/* tslint:disable */

export interface Query {
  getPosts: Array<Post>;
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
  text: string;
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
