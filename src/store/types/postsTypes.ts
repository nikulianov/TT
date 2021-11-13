export interface IPost{
  id: number;
  title: string;
  description: string;
  photo: string;
}

export interface IPosts{
  rows: IPost[]
}

export interface PostsState{
  posts: IPosts | null;
  loading: boolean;
  error: null | string;
}

export interface FetchPostsAction{
  payload: IPosts | null
}

export type postsActions = FetchPostsAction
