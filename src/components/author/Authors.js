import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../graghql/queries";
import {
  Avatar,
  Divider,
  Grid2,
  Typography,
  autocompleteClasses,
} from "@mui/material";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <h4>Loading ...</h4>;

  if (error) return <h4>Error ...</h4>;
  console.log(data);
  const { authors } = data;
  return (
    <Grid2
      container
      direction="column"
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid2 xs={12} padding={2}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid2>
          {index !== authors.length - 1 && (
            <Grid2 xs={12}>
              <Divider variant="middle" />
            </Grid2>
          )}
        </React.Fragment>
      ))}
    </Grid2>
  );
}

export default Authors;
