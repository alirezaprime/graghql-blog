import React from "react";
import { GET_POST_INFO } from "../graghql/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loader from "../shared/Loader";

function BlogPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug: slug },
  });

  if (loading)
    return (
      <h4>
        <Loader />
      </h4>
    );

  if (error) return <h4>Error ...</h4>;
  console.log(data);

  return <div>BlogPage</div>;
}

export default BlogPage;
