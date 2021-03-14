import React from "react";
import { Header } from "../Header";
import { PlayButton } from "../PlayButton";
import { SongsListItem } from "../SongsListItem";
import { Songs } from "../ListItemWrappers/Songs.wrapper";
import { Section } from "../Section";
import { SearchElements } from "../SearchElements";
import { Loader } from "../Loader";
import { Playlist } from "../../../../../../store/types/playlist";
import { Song } from "../../../../../../store/types/song";
import { ServerError } from "../ServerError";
import { Container } from "./layout.styled";

type PlaylistLayoutProps = {
  isLoading: boolean;
  playlistData: Playlist;
  isError: string;
};

export const PlaylistLayout = ({
  isLoading,
  playlistData,
  isError,
}: PlaylistLayoutProps) => (
  <Container>
    {isLoading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Header
          imgUrl={
            playlistData.songs.length > 0
              ? playlistData.songs[0].artworkUrl100
              : "https://cdn.pixabay.com/photo/2018/04/11/19/48/music-3311599_960_720.png"
          }
          category="Playlist"
          title={playlistData.playlist_name}
        />
        {playlistData.songs.length > 0 && <PlayButton />}
        {playlistData.songs.length > 0 ? (
          <Section
            title={`${playlistData.playlist_name} songs`}
            children={
              <Songs>
                {(playlistData.songs as Song[]).map((song, i) => (
                  <SongsListItem key={i} id={i} songData={song} />
                ))}
              </Songs>
            }
          />
        ) : (
          <SearchElements sectionName="playlist" />
        )}
      </React.Fragment>
    )}
    {isError && <ServerError error={isError} />}
  </Container>
);
