import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useStoreState, useStoreActions } from "easy-peasy";

const VideoItem = ({ video, index }) => {
  const { videoId, title, thumbnails } = video;
  const playing = useStoreState(
    (state) => state.currentPlaylist.playingNow
  );
  const  {setPlayingNow}  = useStoreActions(
    (actions) => actions.currentPlaylist
  );
  const activeColor = index === playing ? "#1976d2aa" : "#fff";
  return (
    <Link
      to={`video/${videoId}`}
      component={RouterLink}
      sx={{
        color: "inherit",
        textDecoration: "none",
        backgroundColor: activeColor,
      }}
      onClick={() => setPlayingNow(index)}
    >
      <Box sx={{ backgroundColor: activeColor, paddingBottom: "8px" }}>
        <Grid
          container
          spacing={1}
          sx={{
            placeItems: "center",
            padding: "5px",
          }}
        >
          <Grid item xs={1}>
            <Typography variant="body2">
              {playing === index ? <PlayArrowIcon /> : index+1}
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <img src={thumbnails} alt="" />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "600",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "5px" }}>
                  Stack Learner
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default VideoItem;
