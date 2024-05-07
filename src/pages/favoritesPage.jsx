import { useStoreState } from "easy-peasy";

import usePlaylist from "../hooks/usePlaylist";

import Header from "../components/header";
import PlaylistItems from "../components/playlist-items";

const FavoritesPage = () => {
  const { favorites } = useStoreState((state) => state.playlist);
  const { getPlaylistByIds } = usePlaylist();
  const favPlaylist = getPlaylistByIds(favorites);
  return (
    <>
      <Header />
      <PlaylistItems playlistItems={favPlaylist} />
    </>
  );
};

export default FavoritesPage;
