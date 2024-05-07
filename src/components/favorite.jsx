import PropTypes from "prop-types";
import { useStoreState } from "easy-peasy";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FavoriteEl = ({ playlistId }) => {
  const { favorites } = useStoreState((state) => state.playlist);
  const isFavorite = favorites.includes(playlistId);
  return (
    <div>
      <Checkbox sx={{color:'#fff','&.Mui-checked': {
      color: '#ff0000' },}}
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={isFavorite}
      />
    </div>
  );
};
FavoriteEl.propTypes = {
  playlistId: PropTypes.string.isRequired,
};
export default FavoriteEl;
