import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../graghql/queries";
import { Avatar, Box, Grid2, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug: slug },
  });
  if (loading) return null;

  return (
    <Grid2
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1)0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid2 item xs={12} m={2} width="100%">
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid2
            item
            xs={12}
            key={comment.id}
            mt={2}
            p={2}
            width="100%"
            border="1px silver solid"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
}

export default Comments;
