import { useStoreState } from "easy-peasy";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";

import VideoItem from "./video-item";
import NavigateCtrl from "./navigate";

const VideoList = () => {
  const { thumbnails, title, videos } = useStoreState(
    (state) => state.currentPlaylist.playlist
  );
  if (!videos) {
    return <h1>No video was found</h1>;
  }
  return (
    <Card
      // sx={{
      //   maxHeight: { sm: "100vh", xs: "100vh", md: "inherit" },
      //   overflowY: { xs: "scroll", sm: "scroll" },
      // }}
    >
      <CardMedia
        sx={{ display: { sm: "none", md: "block", lg: "block" } }}
        component="img"
        alt="playlist-image"
        image={thumbnails}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <NavigateCtrl />
      </CardContent>
      <Box
        sx={{
          maxHeight: '400px',
          overflowY: 'auto'
        }}
      >
        <MenuList>
          {videos.map((video, index) => (
            <VideoItem key={video.videoId} video={video} index={index} />
          ))}
        </MenuList>
      </Box>
    </Card>
  );
};

export default VideoList;
