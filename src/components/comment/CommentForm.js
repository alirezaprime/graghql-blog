import React, { useState } from "react";
import { Button, Grid2, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../graghql/mutation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { slug, name, email, text },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("تمام فیلد ها رو پر کن", {
        position: "top-center",
      });
    }
  };
  if (data) {
    toast.success("کامنت ارسال شد و منتظر تایید میباشد ", {
      position: "top-center",
    });
  }

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
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid2>
      <ToastContainer />
    </Grid2>
  );
}

export default CommentForm;
