import { Suspense, lazy } from "react";
import PropTypes from "prop-types";

const PlaylistCard = lazy(() => import("../playlist-card"));

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const PlaylistItems = ({ playlistItems }) => {
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={2}>
          {playlistItems.map((playlist) => {
            return (
              <Grid item key={playlist.id} sm={6} md={4} lg={3}>
                <Suspense
                  fallback={
                    <div>
                      <h2>Loading</h2>
                    </div>
                  }
                >
                  <PlaylistCard playlist={playlist} />
                </Suspense>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

PlaylistItems.propTypes = {
  playlistItems: PropTypes.array.isRequired,
};

export default PlaylistItems;
