import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

import usePlaylist from "../../hooks/usePlaylist";
import FavoriteEl from "../favorite";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const PlaylistCard = ({ playlist }) => {
  const { thumbnails, totalResult, title, id } = playlist;
  const playlists = useStoreState((state) => state.playlist.data);
  const {setPlaylist, setPlayingNow} = useStoreActions(
    (actions) => actions.currentPlaylist
  );
  const { toggleFavorites } = usePlaylist();
  const handleSetPlaylist = (id) => {
    const playlist = playlists[id];
    setPlaylist(playlist);
    setPlayingNow(0)
  };
  return (
    <Card sx={{ minwidth: "100%", position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="194"
          image={thumbnails}
          alt="Playlist thumbnails"
        />
        <Box
          sx={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            backgroundColor: "#000000aa",
            color: "#fff",
            padding: "2px 8px",
            borderRadius: "3px",
          }}
        >
          <Typography variant="body2">
            {`${totalResult} ${totalResult > 1 ? "videos" : "video"}`}
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            lineHeight: 1.4,
            maxHeight: "45px",
            overflow: "hidden",
          }}
          color=""
        >
          {title}
        </Typography>
        <Link
          component={RouterLink}
          to={`/playlists/${id}/video/${playlist.videos[0].videoId}`}
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          <Typography
            onClick={() => handleSetPlaylist(id)}
            variant="body2"
            sx={{ marginTop: "8px", fontWeight: "500" }}
          >
            View Full playlist
          </Typography>
        </Link>
        <Box
          onClick={() => toggleFavorites(id)}
          sx={{
            display: "inline-block",
            position: "absolute",
            right: "5px",
            top: "5px",
            borderRadius: '50%',
            background: "#1976d2aa",
          }}
        >
          <FavoriteEl playlistId={id} />
        </Box>
      </CardContent>
    </Card>
  );
};

PlaylistCard.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default PlaylistCard;
