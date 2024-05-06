import { action, persist } from "easy-peasy";

const currentPlaylistModel = persist({
  playlist: {
    id: "",
    title: "",
    description: "",
    thumbnails: "",
    channelTitle: "",
    playingNow: 0,
    totalResult: 0,
    videos: [],
  },
  setPlaylist: action((state, payload, helper) => {
    console.log(helper);
    state.playlist = {
      ...payload,
      playingNow: 0,
    };
  }),
  setPlayingNow: action((state, payload) => {
    state.playlist.playingNow = payload;
  }),
});

export default currentPlaylistModel;
