import { useQuery } from "@apollo/client";
import { Grid2 } from "@mui/material";

import { GET_BLOGS_INFO } from "../graphql/queries";
import CardEl from "../components/CardEl";
import Loader from "../components/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, error });

  if (loading) return <Loader />;

  return (
    <Grid2 container spacing={3}>
      {data.posts.map((post) => (
        <Grid2 key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <CardEl {...post} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Blogs;
