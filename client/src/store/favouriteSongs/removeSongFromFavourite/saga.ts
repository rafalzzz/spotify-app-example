import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { networkHandlerPut } from "../../../common/networkHandler";
import { REMOVE_SONG_FROM_FAVOURITE } from "./consts";
import { UPDATE_FAVOURITE_SONGS_ARRAY } from "../favouriteSongsArray/consts";
import { removeSongFromFavouriteStarted } from "./actions";
import { Song } from "../../types/song";
import { IS_AUTH } from "../../user/isAuth/consts";

export type removeSongFromFavouriteStartedProps = {
  type: typeof REMOVE_SONG_FROM_FAVOURITE;
  payload: { song: Song };
};

export function* removeFromFavourite({
  payload,
}: ReturnType<typeof removeSongFromFavouriteStarted>) {
  try {
    yield put({
      type: IS_AUTH.started,
    });
    const { song } = payload;
    const request = yield call(
      networkHandlerPut,
      `/favourite/remove_from_favourite`,
      song
    );
    console.log("delete song from fav", request);
    if (request.status === 200) {
      yield put({
        type: REMOVE_SONG_FROM_FAVOURITE.success,
      });
      yield put({
        type: UPDATE_FAVOURITE_SONGS_ARRAY,
        payload: request.data.favSongs,
      });
    }
    if (request.status === 202) {
      yield put({
        type: REMOVE_SONG_FROM_FAVOURITE.failure,
        payload: request.data.message,
      });
    }
  } catch (e) {
    yield put({ type: REMOVE_SONG_FROM_FAVOURITE.failure, message: e });
  }
}

export function* removeFromFavouriteSaga(): SagaIterator {
  yield takeLatest(
    getType(removeSongFromFavouriteStarted),
    removeFromFavourite
  );
}
