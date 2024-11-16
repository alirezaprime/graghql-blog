// import { useQuery } from "@apollo/client";
// import React from "react";
// import { useParams } from "react-router-dom";
// import { GET_AUTHOR_INFO } from "../graghql/queries";
// import { Avatar, Container, Grid2, Typography } from "@mui/material";

// function AuthorPage() {
//   const { slug } = useParams();

//   const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
//     variables: { slug: slug },
//   });
//   if (loading) return <h4>Loading ...</h4>;

//   if (error) return <h4>error ...</h4>;
//   console.log(data);

//   //   console.log(params);
//   return (
//     <div>
//       <Container maxWidth="lg">
//         <Grid2 container mt={10}>
//           <Grid2
//             item
//             xs={12}
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//           >
//             <Avatar src={data.author.avatar.url} />
//             <Typography component="h3" variant="h5">
//               {data.author.name}
//             </Typography>
//             <Typography component="p" variant="h5">
//               {data.author.field}
//             </Typography>
//           </Grid2>
//         </Grid2>
//       </Container>
//     </div>
//   );
// }

// export default AuthorPage;
import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../graghql/queries";
import { Avatar, Container, Grid2, Typography } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

import sanitizeHtml from "sanitize-html";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });
  if (loading)
    return (
      <h4>
        <Loader />
      </h4>
    );

  if (error) return <h4>error ...</h4>;
  console.log(data);

  const {
    author: { name, field, avatar, description, posts },
  } = data;

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Grid2
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ textAlign: "center" }}
        >
          <Grid2 item>
            <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          </Grid2>
          <Grid2 item>
            <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
              {name}
            </Typography>
          </Grid2>
          <Grid2 item>
            <Typography component="p" variant="h5" color="text.secondary">
              {field}
            </Typography>
          </Grid2>
          <Grid2 item xs={12} mt={5}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description.html),
              }}
            ></div>
          </Grid2>
          <Grid2 item xs={12} mt={6}>
            <Typography component="h3" variant="h5" fontWeight={700}>
              مقالات {name}
            </Typography>
            <Grid2 container spacing={2} mt={2}>
              {posts &&
                posts.map((post) => (
                  <Grid2 item xs={12} sm={6} md={4} key={post.id}>
                    <CardEL
                      title={post.title}
                      slug={post.slug}
                      coverPhoto={post.coverPhoto}
                    />
                  </Grid2>
                ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default AuthorPage;
