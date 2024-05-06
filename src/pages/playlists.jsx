import { Suspense, lazy } from "react";
import { useStoreState } from "easy-peasy";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Header from "../components/header";
const PlaylistCard = lazy(() => import("../components/playlist-card"));

const Playlists = () => {
  const playlists = useStoreState((state) => state.playlist.data);
  return (
    <>
      <Header />
      <Box component="section">
        <Container>
          <Grid container spacing={2}>
            {Object.values(playlists)?.map((playlist) => {
              return (
                <Grid item key={playlist.id} sm={6} md={4} lg={3}>
                  <Suspense fallback={<div><h2>Loading</h2></div>} >
                    <PlaylistCard playlist={playlist} />
                  </Suspense>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Playlists;
