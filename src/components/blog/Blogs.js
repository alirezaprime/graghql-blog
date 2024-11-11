import { useQuery } from "@apollo/client";
import React from "react";
import GET_BLOGS_INFO from "../graghql/queries";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h4>Loading ...</h4>;

  if (error) return <h4>Error ...</h4>;
  console.log({ loading, data, error });
  return <div>Blogs</div>;
}

export default Blogs;
