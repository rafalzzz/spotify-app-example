import { CREATE_PLAYLIST } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { createPlaylistStarted } from "./actions";

export type CreatePlaylistState = {
  isLoading: boolean;
  isError: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
};

export const createPlaylist = (
  state = initialState,
  action: Action
): CreatePlaylistState => {
  switch (action.type) {
    case getType(createPlaylistStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case CREATE_PLAYLIST.success:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_PLAYLIST.failure:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
