import { useStoreState, useStoreActions } from "easy-peasy";

const usePlayer = (playlistId = "") => {
  const { setPlaylist, setPlayingNow } = useStoreActions(
    (actions) => actions.currentPlaylist
  );
  const { playlist} = useStoreState(
    (state) => state.currentPlaylist
  );

  const newPlaylist = useStoreState((state) => state.playlist.data[playlistId]);
  if (!newPlaylist) {
    alert("No playlist found");
    return;
  }
  if (newPlaylist.id !== playlist.id) {
    setPlaylist(newPlaylist);
    setPlayingNow(0)
  }

};

export default usePlayer;
