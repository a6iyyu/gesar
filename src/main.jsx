import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router/router.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Plus Jakarta Sans", Times, sans-serif, serif;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display: none !important;
}
@media screen and (max-width: 8192px) {
  body {
    opacity: 0;
  }
}
@media screen and (max-width: 3120px) {
  body {
    opacity: 1;
  }
}
@media screen and (max-width: 324px) {
  * {
    display: none;
  }
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
);