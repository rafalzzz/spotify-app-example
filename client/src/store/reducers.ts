import { combineReducers } from "redux";
import { RegisterUserState, registerUser } from "./user/registerUser/reducer";
import { LoginUserState, loginUser } from "./user/loginUser/reducer";
import { LogoutUserState, logoutUser } from "./user/logoutUser/reducer";
import { CheckAuthState, checkAuth } from "./user/isAuth/reducer";
import {
  SongsByArtistState,
  songsByArtist,
} from "./iTunesAPI/fetchSongsByArtist/reducer";
import {
  AlbumsByArtistState,
  albumsByArtist,
} from "./iTunesAPI/fetchAlbumsByArtist/reducer";
import {
  CreatePlaylistState,
  createPlaylist,
} from "./playlist/createPlaylist/reducer";
import {
  FetchUserPlaylistsState,
  fetchUserPlaylists,
} from "./playlist/fetchUserPlaylists/reducer";
import {
  ChangePlaylistNameState,
  changePlaylistName,
} from "./playlist/changePlaylistName/reducer";
import {
  DeletePlaylistState,
  deletePlaylist,
} from "./playlist/deletePlaylist/reducer";
import {
  FetchPlaylistState,
  fetchPlaylist,
} from "./playlist/fetchUserPlaylist/reducer";
import {
  FetchSearchDataState,
  fetchSearchData,
} from "./iTunesAPI/fetchSearchData/reducer";
import {
  AddToFavouriteState,
  addToFavourite,
} from "./favouriteSongs/addSongToFavourite/reducer";
import {
  RemoveFromFavouriteState,
  removeFromFavourite,
} from "./favouriteSongs/removeSongFromFavourite/reducer";
import {
  FetchUserFavouriteSongsState,
  fetchUserFavouriteSongs,
} from "./favouriteSongs/fetchUserFavouriteSongs/reducer";
import {
  FavouriteSongsArrayState,
  favouriteSongsArray,
} from "./favouriteSongs/favouriteSongsArray/reducer";
import {
  SongsByAlbumState,
  songsByAlbum,
} from "./iTunesAPI/fetchSongsByAlbum/reducer";
import {
  AddToPlaylistState,
  addToPlaylist,
} from "./playlist/addSongToPlaylist/reducer";
import {
  RemoveFromPlaylistState,
  removeFromPlaylist,
} from "./playlist/removeSongFromPlaylist/reducer";
import {
  UserNicknameState,
  userNickname,
} from "./user/getUserNickname/reducer";

export type AppState = {
  registerUser: RegisterUserState;
  loginUser: LoginUserState;
  logoutUser: LogoutUserState;
  checkAuth: CheckAuthState;
  songsByArtist: SongsByArtistState;
  albumsByArtist: AlbumsByArtistState;
  createPlaylist: CreatePlaylistState;
  fetchUserPlaylists: FetchUserPlaylistsState;
  changePlaylistName: ChangePlaylistNameState;
  deletePlaylist: DeletePlaylistState;
  fetchPlaylist: FetchPlaylistState;
  fetchSearchData: FetchSearchDataState;
  addToFavourite: AddToFavouriteState;
  removeFromFavourite: RemoveFromFavouriteState;
  fetchUserFavouriteSongs: FetchUserFavouriteSongsState;
  favouriteSongsArray: FavouriteSongsArrayState;
  songsByAlbum: SongsByAlbumState;
  addToPlaylist: AddToPlaylistState;
  removeFromPlaylist: RemoveFromPlaylistState;
  userNickname: UserNicknameState;
};

export const reducer = combineReducers<AppState>({
  registerUser,
  loginUser,
  logoutUser,
  checkAuth,
  songsByArtist,
  albumsByArtist,
  createPlaylist,
  fetchUserPlaylists,
  changePlaylistName,
  deletePlaylist,
  fetchPlaylist,
  fetchSearchData,
  addToFavourite,
  removeFromFavourite,
  fetchUserFavouriteSongs,
  favouriteSongsArray,
  songsByAlbum,
  addToPlaylist,
  removeFromPlaylist,
  userNickname,
});

export type RootState = ReturnType<typeof reducer>;
