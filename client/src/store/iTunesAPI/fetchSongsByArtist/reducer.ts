import { FETCH_SONGS_BY_ARTIST } from "./consts";
import { fetchSongsByArtist, clearSongsByArtistState } from "./actions";

import { Action } from "../../types/actions";
import { getType } from "typesafe-actions";
import { Song } from "../../types/song";

export type SongsByArtistResults = {
  resultCount: number;
  results: Song[];
};

export type SongsByArtistState = {
  isLoading: boolean;
  isError: boolean;
  songs: SongsByArtistResults;
};

export const initialState = {
  isLoading: false,
  isError: false,
  songs: { resultCount: 0, results: [] as Song[] },
};

export const songsByArtist = (
  state = initialState,
  action: Action
): SongsByArtistState => {
  switch (action.type) {
    case getType(fetchSongsByArtist):
      return {
        ...state,
        songs: initialState.songs,
        isLoading: true,
        isError: initialState.isError,
      };
    case FETCH_SONGS_BY_ARTIST.success:
      return {
        ...state,
        songs: action.payload,
        isLoading: initialState.isLoading,
      };
    case FETCH_SONGS_BY_ARTIST.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: true,
      };
    case getType(clearSongsByArtistState):
      return {
        ...state,
        songs: initialState.songs,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
      };
    default:
      return { ...state };
  }
};
