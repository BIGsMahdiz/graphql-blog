import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Avatar, Box, Container, Grid2, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";

import Loader from "../components/Loader";
import { GET_POST_INFO } from "../graphql/queries";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";

function BlogsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  console.log({ loading, data, error });

  if (loading) return <Loader />;
  if (error) return <h3>something wrong</h3>;

  const { author, content, coverPhoto, title } = data.post;

  return (
    <Container maxWidth="lg" sx={{ marginTop: "60px" }}>
      <Grid2 container>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer", fontSize: "1.5rem" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }} marginTop={5}>
          <img
            src={coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12 }} marginTop={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <CommentForm slug={slug} />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Comments slug={slug} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default BlogsPage;
