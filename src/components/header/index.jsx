import { useStoreActions } from "easy-peasy";
import { Link as RouterLink } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
const pages = ["playlists", "recents", "favourites"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openDialog = useStoreActions((actions) => actions.app.openDialog);
  const handleOpenDialog = () => {
    openDialog();
    handleClosenav();
  };

  const handleOpenNav = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClosenav = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <YouTubeIcon fontSize="large" />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ ml: 2, display: { xs: "none", sm: "block" } }}
            >
              Clean YouTube
            </Typography>
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            {pages.map((page) => {
              return (
                <MenuItem
                  key={page}
                  onClick={handleClosenav}
                  sx={{ display: "inline-block" }}
                >
                  <Link
                    component={RouterLink}
                    sx={{ textTransform: "capitalize", color: "inherit", textDecoration: 'none' }}
                    textAlign="center"
                    to={page === "home" ? "/" : `/${page}`}
                  >
                    {page}
                  </Link>
                </MenuItem>
              );
            })}

            <MenuItem
              onClick={handleOpenDialog}
              sx={{ display: "inline-block" }}
            >
              <Typography
                sx={{ textTransform: "capitalize" }}
                textAlign="center"
              >
                create playlist
              </Typography>
            </MenuItem>
          </Box>

          <Search sx={{ flexGrow: { sm: 1 } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNav}
              color="inherit"
              sx={{ display: { sm: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClosenav}
              sx={{
                display: { sm: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                return (
                  <MenuItem key={page} onClick={handleClosenav}>
                    <Link component={RouterLink} to={page === "home" ? '/' : `/${page}`}
                      sx={{ textTransform: "capitalize", color: 'inherit', textDecoration: 'none' }}
                      textAlign="center"
                    >
                      {page}
                    </Link>
                  </MenuItem>
                );
              })}

              <MenuItem onClick={handleOpenDialog}>
                <Typography textAlign="center">Create Playlist</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
