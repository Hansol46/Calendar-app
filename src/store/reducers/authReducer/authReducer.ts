import { AuthAction, AuthActionEnum, AuthState } from "./types";
import { User } from "../../../models";

const initialState: AuthState = {
  // isAuth: false,
  isAuth: !!localStorage.getItem("auth"),
  user: {} as User,
  error: "",
  isLoading: false,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };

    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };

    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case AuthActionEnum.SET_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
