import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEL({ title, slug, imageCover, author }) {
  return (
    <Card sx={{ maxHeight: '26rem', boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height="194"
        image={imageCover.url}
        alt={slug}
      />
      <CardContent>
        <Tooltip title={title}>
          <Link
            to={`/blogs/${slug}`}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Typography
              component="h3"
              variant="p"
              color="text.primary"
              fontWeight={600}
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                width: '100%',
                height: '1.7rem',
                whiteSpace: 'nowrap',
                fontSize: '18px',
                textDecoration: 'underline'
              }}
            >
              {title}
            </Typography>
          </Link>
        </Tooltip>
      </CardContent>
    </Card>
  );
}

export default CardEL;
