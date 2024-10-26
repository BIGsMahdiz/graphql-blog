import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEl({ title, slug, coverPhoto, author }) {
  return (
    <div>
      <Card
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius: 4,
        }}
      >
        {author && (
          <CardHeader
            avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
            title={
              <Typography
                component="p"
                variant="p"
                color="text.secondary"
                fontWeight={500}
              >
                {author.name}
              </Typography>
            }
          />
        )}
        <CardMedia
          height="194"
          component="img"
          image={coverPhoto.url}
          alt={slug}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="p"
            fontWeight="800"
            color="primary"
            noWrap
          >
            {title}
          </Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardActions>
          <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
            <Button variant="outlined" fullWidth>
              مطاله مقاله
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardEl;
