import { useStoreState } from "easy-peasy";

import Header from "../components/header";
import PlaylistItems from "../components/playlist-items";

const Playlists = () => {
  const playlists = Object.values(
    useStoreState((state) => state.playlist.data)
  );
  return (
    <>
      <Header />
      <PlaylistItems playlistItems={playlists} />
    </>
  );
};

export default Playlists;
