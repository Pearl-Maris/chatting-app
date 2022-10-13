import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./assets/theme";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
