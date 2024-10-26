import { Container, Grid2, Typography } from "@mui/material";

import Authors from "../modules/Authors";
import Blogs from "../modules/Blogs";

function HomePage() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid2 container mt={4} spacing={2} padding={3}>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
              نویسنده ها
            </Typography>
            <Authors />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
              مقالات
            </Typography>
            <Blogs />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default HomePage;
