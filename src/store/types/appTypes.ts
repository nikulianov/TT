
export interface IUser{
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface AppState{
  user: IUser | null;
  loading: boolean;
  messages: string;
  isAuth: boolean;
  error: boolean;
}

export interface FetchUserAction{
  payload: IUser | null;
}

export interface FetchErrorAction{
  payload: boolean;
}

export interface FetchLoadingAction{
  payload: boolean;
}

export type AppAction = FetchUserAction | FetchErrorAction | FetchLoadingAction | unknown
