import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import { Avatar, Container, Grid2, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEl from "../components/CardEl";
import Loader from "../components/Loader";

function AuthorsPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });

  console.log("author: ", { loading, data, error });

  if (loading) return <Loader />;
  if (error) return <h3>something wrong</h3>;

  const { author } = data;

  return (
    <div>
      <Container maxWidth="lg">
        <Grid2 container>
          <Grid2
            size={{ xs: 12 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={10}
          >
            <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
            <Typography component="h3" variant="h5" fontWeight={700} mt={5}>
              {author.name}
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              color="text.secondary"
              mt={2}
            >
              {author.field}
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12 }} mt={5}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(author.description.html),
              }}
            ></div>
          </Grid2>
          <Grid2 size={{ xs: 12 }} mt={6}>
            <Typography component="h3" variant="h5" fontWeight={700}>
              مقالات {author.name}
            </Typography>
            <Grid2 container spacing={2} mt={5}>
              {author.post.map((post) => (
                <Grid2 key={post.id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                  <CardEl {...post} />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default AuthorsPage;
