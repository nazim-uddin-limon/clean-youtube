import { createStore } from "easy-peasy";

import playlistModel from "./models/playlistModels";
import appModel from "./models/appModel";
import currentPlaylistModel from './models/currentPlaylistModel'


const store = createStore({
  playlist: playlistModel,
  currentPlaylist: currentPlaylistModel,
  app: appModel,
});

export default store;
