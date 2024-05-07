import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Player = () => {
  const { videoId } = useParams();
  return (
    <div className="youtubeContainer">
      <YouTube
        opts={{ width: "100%", height: "100%", playerVars: { autoplay: 1 } }}
        videoId={videoId}
      />
    </div>
  );
};

export default Player;
