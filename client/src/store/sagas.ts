import { fork } from "redux-saga/effects";
import { registerUserSaga } from "./user/registerUser/saga";
import { loginUserSaga } from "./user/loginUser/saga";
import { logoutUserSaga } from "./user/logoutUser/saga";
import { checkAuthSaga } from "./user/isAuth/saga";
import { songsByArtistSaga } from "./iTunesAPI/fetchSongsByArtist/saga";
import { albumsByArtistSaga } from "./iTunesAPI/fetchAlbumsByArtist/saga";
import { createPlaylistSaga } from "./playlist/createPlaylist/saga";
import { fetchUserPlaylistsSaga } from "./playlist/fetchUserPlaylists/saga";
import { changePlaylistNameSaga } from "./playlist/changePlaylistName/saga";
import { deletePlaylistSaga } from "./playlist/deletePlaylist/saga";
import { fetchPlaylistSaga } from "./playlist/fetchUserPlaylist/saga";
import { fetchSearchDataSaga } from "./iTunesAPI/fetchSearchData/saga";
import { addToFavouriteSaga } from "./favouriteSongs/addSongToFavourite/saga";
import { removeFromFavouriteSaga } from "./favouriteSongs/removeSongFromFavourite/saga";
import { fetchUserFavouriteSongsSaga } from "./favouriteSongs/fetchUserFavouriteSongs/saga";
import { songsByAlbumSaga } from "./iTunesAPI/fetchSongsByAlbum/saga";
import { addToPlaylistSaga } from "./playlist/addSongToPlaylist/saga";
import { removeFromPlaylistSaga } from "./playlist/removeSongFromPlaylist/saga";
import { userNicknameSaga } from "./user/getUserNickname/saga";

export function* rootSaga(services = {}) {
  yield fork(registerUserSaga);
  yield fork(loginUserSaga);
  yield fork(logoutUserSaga);
  yield fork(checkAuthSaga);
  yield fork(songsByArtistSaga);
  yield fork(albumsByArtistSaga);
  yield fork(createPlaylistSaga);
  yield fork(fetchUserPlaylistsSaga);
  yield fork(changePlaylistNameSaga);
  yield fork(deletePlaylistSaga);
  yield fork(fetchPlaylistSaga);
  yield fork(fetchSearchDataSaga);
  yield fork(addToFavouriteSaga);
  yield fork(removeFromFavouriteSaga);
  yield fork(fetchUserFavouriteSongsSaga);
  yield fork(songsByAlbumSaga);
  yield fork(addToPlaylistSaga);
  yield fork(removeFromPlaylistSaga);
  yield fork(userNicknameSaga);
}
