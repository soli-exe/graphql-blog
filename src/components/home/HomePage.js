import React from "react";
import Authors from "../author/Authors";
import Blog from "../blog/Blog";
import { Container, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={600}>Authors</Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={600}>Blog</Typography>
          <Blog />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
