import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
{
  /* <footer>
<Typography
  component="p"
  variant="p"
  bgcolor="#f7f7f7"
  color="primary"
  padding="10px"
  textAlign="center"
  mt={10}
>
  پروژه ی وبلاگ graphQL | دوره ی ری اکت سایت علیرضا
</Typography>
</footer> */
}
