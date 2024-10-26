import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Layout({ children }) {
  return (
    <div>
      <header>
        <AppBar position="sticky">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography
                component="h1"
                variant="h5"
                fontWeight="bold"
                flex={1}
              >
                وبلاگ بوتواستارت
              </Typography>
              <BookIcon />
            </Toolbar>
          </Container>
        </AppBar>
      </header>

      <main>{children}</main>

      <footer>
        <Typography
          component="p"
          variant="p"
          bgcolor="#f7f7f7"
          color="primary"
          padding="10px"
          textAlign="center"
          mt={10}
        >
          پروژه وبلاگ با GraphQL | دوره ریکت سایت بوتواستارت
        </Typography>
      </footer>
    </div>
  );
}

export default Layout;
