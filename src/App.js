// import { gql, useQuery } from "@apollo/client";
// import "./App.css";

// const QUERY = gql`
//   query {
//     authors {
//       name
//     }
//   }
// `;

// function App() {
//   const { loading, data } = useQuery(QUERY);
//   console.log({ data });
//   return <h1>App</h1>;
// }

// export default App;
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return <Header />;
}
export default App;
