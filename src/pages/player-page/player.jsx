import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Player = () => {
  const { videoId } = useParams();
  return (
    <div className="youtubeContainer">
      <YouTube
        id="video"
        opts={{ width: "100%", height: "100%" }}
        videoId={videoId}
      />
    </div>
  );
};

export default Player;
