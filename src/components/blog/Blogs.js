import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../graghql/queries";
import { Grid2 } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading)
    return (
      <h4>
        <Loader />
      </h4>
    );

  if (error) return <h4>Error ...</h4>;
  console.log({ loading, data, error });
  return (
    <Grid2 container spacing={2}>
      {data.posts.map((post) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEL {...post} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Blogs;
