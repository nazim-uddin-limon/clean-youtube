import { useStoreState, useStoreActions } from "easy-peasy";

const usePlaylist = () => {
  const { addToRecent, addToFavorite, removeFromFavorites } = useStoreActions(
    (actions) => actions.playlist
  );
  const { data, recents, favorites } = useStoreState((state) => state.playlist);
  const toggleFavorites = (playlistId) => {
    if (favorites.includes(playlistId)) {
      removeFromFavorites(playlistId);
      return;
    }
    if(favorites.length >= 3) {
      alert('maximum playlist added')
      return
    }
    addToFavorite(playlistId);
  };
  const handleToRecents = (playlistId) => {
    if (recents.includes(playlistId)) {
      alert("Already in recents");
      return;
    }
    addToRecent(playlistId);
  };
  const getPlaylistByIds = (playlistIds = []) => {
    const playlists = [];
    playlistIds.map((id) => {
      playlists.push(data[id]);
    });
    return playlists;
  };

  return {
    toggleFavorites,
    handleToRecents,
    getPlaylistByIds,
  };
};

export default usePlaylist;
