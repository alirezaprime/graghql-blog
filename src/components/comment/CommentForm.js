import React, { useState } from "react";
import { Button, Grid2, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  return (
    <Grid2
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid2 item xs={12} m={2} sx={{ width: "100%" }}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid2>
      <Grid2 item xs={12} m={2} sx={{ width: "100%" }}>
        <TextField
          label="نام کاربری"
          sx={{ width: "100%" }}
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Grid2>
      <Grid2 item xs={12} m={2} sx={{ width: "100%" }}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid2>
      <Grid2 item xs={12} m={2} sx={{ width: "100%" }}>
        <TextField
          label="متن کامنت "
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(event) => setText(event.target.value)}
          multiline
        />
      </Grid2>
      <Grid2 item xs={12} m={2}>
        <Button variant="contained">ارسال</Button>
      </Grid2>
    </Grid2>
  );
}

export default CommentForm;
