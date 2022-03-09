import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction,
} from "./types";
import { User } from "../../../models";
import { AppDispatch } from "../..";
import axios from "axios";

export const AuthActionCreator = {
  setUser: (user: User): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),

  setAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: isAuth,
  }),

  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),

  setLoading: (isLoading: boolean): SetLoadingAction => ({
    type: AuthActionEnum.SET_LOADING,
    payload: isLoading,
  }),

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreator.setLoading(true));

        const response = await axios.get<User[]>("./users.json");
        const mocksUser = response.data.find(
          (user) => user.username === username && user.password === password
        );

        if (mocksUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mocksUser.username);
          dispatch(AuthActionCreator.setAuth(true));
          dispatch(AuthActionCreator.setUser(mocksUser));
        } else {
          dispatch(AuthActionCreator.setError("Неверный логин или пароль"));
        }

        dispatch(AuthActionCreator.setLoading(false));
      } catch (error) {
        dispatch(
          AuthActionCreator.setError("Произошла ошибка при авторизации")
        );
        console.error(error);
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreator.setUser({} as User));
    dispatch(AuthActionCreator.setAuth(false));
  },
};
