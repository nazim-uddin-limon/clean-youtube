import { Outlet } from "react-router-dom";
import VideoList from "./video-list";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const MainLayout = () => {
  return (
    <Box variant="section">
      <Container>
        <Grid container spacing={{ xs: 0, sm: 2 }}>
          <Grid item xs={12} md={4} order={{ xs: 2, sm: 2, md: 1 }}>
            <VideoList />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            order={{ xs: 1, sm: 1, md: 2 }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainLayout;
