import { REGISTER_USER, CLEAR_REGISTER_USER_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
import { registerUserStarted } from "./actions";

export type RegisterUserState = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: "",
};

export const registerUser = (
  state = initialState,
  action: Action
): RegisterUserState => {
  switch (action.type) {
    case getType(registerUserStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
      };
    case REGISTER_USER.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
      };
    case REGISTER_USER.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    case CLEAR_REGISTER_USER_STATE:
      return {
        ...state,
        isSuccess: initialState.isSuccess,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
      };
    default:
      return { ...state };
  }
};
