import { action, thunk, persist } from "easy-peasy";
import playlistData from "../../utils/transformPlaylistData";

const playlistModel = persist({
  data: {},
  loading: false,
  error: "",
  addPlaylist: action((state, payload) => {
    state.data[payload.id] = payload;
  }),
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  getPlaylist: thunk(
    async (
      { addPlaylist, setLoading, setError },
      { playlistId },
      { getState }
    ) => {
      const { data } = getState();
      if (data[playlistId]) {
        return;
      }
      setLoading(true);
      try {
        const playlist = await playlistData(playlistId);
        addPlaylist(playlist);
        setError("");
      } catch (e) {
        const message = e.message || "something went wrong";
        setError(message);
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  ),
});

export default playlistModel;
