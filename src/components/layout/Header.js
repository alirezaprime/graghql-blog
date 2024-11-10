import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import React from "react";

function Header() {
  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              وبلاگ علیرضا
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
