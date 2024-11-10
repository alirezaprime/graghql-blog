import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import theme from "./mui/theme";

import "./styles/index.css";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm38fs8xq06q407w6b39zv5gk/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
