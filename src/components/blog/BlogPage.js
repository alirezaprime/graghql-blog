import React from "react";
import { GET_POST_INFO } from "../graghql/queries";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loader from "../shared/Loader";
import { Avatar, Container, Grid2, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

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

  return (
    <Container maxWidth="lg">
      <Grid2>
        <Grid2
          item
          xs={12}
          mt={9}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid2>
        <Grid2
          item
          xs={12}
          mt={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="80%"
            style={{ borderRadius: 15 }}
          />
        </Grid2>
        <Grid2 item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <div>
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </div>
        </Grid2>
        <Grid2 item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid2>
      </Grid2>
    </Container>
  );

  //   return (
  //     <div>
  //       {" "}
  //       <Container maxWidth="lg">
  //         {" "}
  //         <Grid2 container>
  //           {" "}
  //           <Grid2
  //             item
  //             xs={12}
  //             mt={9}
  //             sx={{
  //               display: "flex",
  //               justifyContent: "space-between",
  //               alignItems: "center",
  //             }}
  //           >
  //             {" "}
  //             <ArrowBackRoundedIcon onClick={() => navigate(-1)} />{" "}
  //             <Typography
  //               component="h2"
  //               variant="h4"
  //               color="primary"
  //               fontWeight={700}
  //             >
  //               {" "}
  //               {data.post.title}{" "}
  //             </Typography>{" "}
  //           </Grid2>{" "}
  //         </Grid2>{" "}
  //       </Container>{" "}
  //     </div>
  //   );
}

export default BlogPage;
