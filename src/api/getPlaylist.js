import axios from "axios";

const getPlaylistItems = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&pageToken=${pageToken}&maxResults=100&playlistId=${playlistId}&key=${
    import.meta.env.VITE_YOUTUBE
  }`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    return getPlaylistItems(playlistId, data.nextPageToken, result);
  }
  return result;
};
const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails,snippet&maxResults=100&id=${playlistId}&key=${
    import.meta.env.VITE_YOUTUBE
  }`;

  const { data } = await axios.get(URL);
  const playlistItems = await getPlaylistItems(playlistId);
  console.log(playlistItems);
  return {
    playlistDetails: data,
    playlistItems,
  };
};

export default getPlaylist;
