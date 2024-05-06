import getPlaylist from "../api/getPlaylist";

const playlistData = async (playlistId) => {
  const data = await getPlaylist(playlistId);

  const { snippet, contentDetails, id } = data.playlistDetails.items[0];

  const playlistDetails = {
    id,
    title: snippet.title,
    description: snippet.description,
    channelTitle: snippet.channelTitle,
    thumbnails: snippet.thumbnails.medium ? snippet.thumbnails.medium.url : "",
    totalResult: contentDetails.itemCount,
  };
  const playlistItems = data.playlistItems.map((item) => {
    return {
      videoId: item.contentDetails.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnails: item.snippet.thumbnails.medium.url,
    };
  });
  return {
    ...playlistDetails,
    videos: playlistItems,
  };
};

export default playlistData;
