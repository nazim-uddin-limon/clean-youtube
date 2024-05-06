import { useStoreState } from "easy-peasy";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";

import VideoItem from "./video-item";

const VideoList = () => {
  const { thumbnails, title, videos } = useStoreState(
    (state) => state.currentPlaylist.playlist
  );
  return (
    <Card sx={{maxHeight: {sm: '100vh', xs: '100vh', md: 'inherit'}, overflowY: {xs: 'scroll', sm: 'scroll'}}}>
      <CardMedia component="img" alt="playlist-image" image={thumbnails} />
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
        <Box>reload</Box>
      </CardContent>
      <Box sx={{maxHeight: {sm: 'inherit',md: '400px'}, overflowY: {md: 'auto'}}}>
        <MenuList>
          {videos.map((video, index) => (
            <VideoItem key={video.videoId} video={video} index={index + 1} />
          ))}
        </MenuList>
      </Box>
    </Card>
  );
};

export default VideoList;
