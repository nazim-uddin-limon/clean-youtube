import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

import { Link as RouterLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const NavigateCtrl = () => {
  const { playlist, playingNow, nextVideo, prevVideo } = useStoreState(
    (state) => state.currentPlaylist
  );
  const { setPlayingNow } = useStoreActions(
    (actions) => actions.currentPlaylist
  );
  const goNext = () => {
    if (playingNow === playlist.totalResult - 1) {
      setPlayingNow(0);
      return;
    }
    setPlayingNow(playingNow + 1);
  };
  const goPrev = () => {
    if (playingNow === 0) {
      setPlayingNow(playlist.totalResult - 1);
      return;
    }
    setPlayingNow(playingNow - 1);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="body2">{`${playingNow + 1}/${
          playlist.totalResult
        }`}</Typography>
      </Box>
      <Box>
        <Link
          aria-disabled={true}
          component={RouterLink}
          to={`video/${prevVideo}`}
          onClick={goPrev}
        >
          <IconButton>
            <SkipPreviousIcon />
          </IconButton>
        </Link>
        <Link component={RouterLink} to={`video/${nextVideo}`} onClick={goNext}>
          <IconButton>
            <SkipNextIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default NavigateCtrl;
