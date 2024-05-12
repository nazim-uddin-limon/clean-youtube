import { action, computed, persist } from "easy-peasy";

const currentPlaylistModel = persist({
  playlist: {
    id: "",
    title: "",
    description: "",
    thumbnails: "",
    channelTitle: "",
    totalResult: 0,
    videos: [],
  },
  playingNow: 0,
  nextVideo: computed((state) => {
    const playingNow = state.playingNow;
    const { totalResult, videos } = state.playlist;
    if (videos.length === 0) {
      return;
    }
    return playingNow < totalResult - 1
      ? videos[playingNow + 1].videoId
      : videos[0].videoId;
  }),
  prevVideo: computed((state) => {
    const playingNow = state.playingNow;
    const { videos, totalResult } = state.playlist;
    if (videos.length === 0) {
      return;
    }
    return playingNow > 0
      ? videos[playingNow - 1].videoId
      : videos[totalResult - 1].videoId;
  }),
  setPlaylist: action((state, payload) => {
    state.playlist = {
      ...payload,
    };
  }),
  setPlayingNow: action((state, payload) => {
    state.playingNow = payload;
  }),
});

export default currentPlaylistModel;
