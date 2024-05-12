import { useStoreState } from "easy-peasy";
import usePlaylist from "../hooks/usePlaylist";

import Header from "../components/header";
import PlaylistItems from "../components/playlist-items";

const RecentsPage = () => {
  const { recents } = useStoreState((state) => state.playlist);
  const { getPlaylistByIds } = usePlaylist();
  const recentPlaylist = getPlaylistByIds(recents);
  return (
    <>
      <Header />
      <PlaylistItems playlistItems={recentPlaylist} />
    </>
  );
};

export default RecentsPage;
