import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../graghql/queries";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });
  if (loading) return <h4>Loading ...</h4>;

  if (error) return <h4>Error ...</h4>;
  console.log(data);
  //   console.log(params);
  return <div>AuthorPage</div>;
}

export default AuthorPage;
