/* tslint:disable */

export interface Query {
  getPosts: Array<Post>;
  getTags: Array<Tag>;
}

export interface Post {
  id: string;
  title: string;
  subTitle: string | null;
  thumbnail: string;
  content: string;
  tags: Array<Tag>;
  comments: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  term: string;
  posts: Array<Post>;
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
  subTitle: string;
  thumbnail: string;
  content: string;
  tags: Array<string> | null;
}

export interface DeletePostMutationArgs {
  postId: string;
}

export interface EditPostMutationArgs {
  postId: string;
  title: string | null;
  subTitle: string | null;
  thumbnail: string | null;
  content: string | null;
  tags: Array<string> | null;
}

export interface Comment {
  id: string;
  post: Post | null;
  text: string;
  createdAt: string;
  updatedAt: string;
}
