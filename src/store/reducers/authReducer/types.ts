import { User } from "../../../models";

export interface AuthState {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  error: string;
}

export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

// Action auth state
export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}
export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: User;
}
export interface SetLoadingAction {
  type: AuthActionEnum.SET_LOADING;
  payload: boolean;
}
export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export type AuthAction =
  | SetAuthAction
  | SetUserAction
  | SetLoadingAction
  | SetErrorAction;
