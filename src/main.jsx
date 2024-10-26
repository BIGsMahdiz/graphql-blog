import { createRoot } from "react-dom/client";
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import theme from "./mui/theme.js";
import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
