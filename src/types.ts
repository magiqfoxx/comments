export interface INewComment {
  name: string;
  email: string;
  body: string;
}
export interface IComment extends INewComment {
  id: number,
}
export interface IAPIComment extends IComment {
  postId: number;
}