import React from "react";
import ReactDOM from "react-dom/client";
import "@splidejs/splide/dist/css/splide.min.css";
import { createGlobalStyle } from "styled-components";
import { Router } from "./router/router.jsx";

const GlobalStyles = createGlobalStyle`
  @media screen and (max-width: 8192px) {
    * {
      opacity: 0;
    }
  }
  @media screen and (max-width: 3120px) {
    * {
      box-sizing: border-box;
      font-family: "Plus Jakarta Sans", Times, sans-serif, serif;
      margin: 0;
      padding: 0;
      opacity: 1;
    }
    ::placeholder {
      color: #006400;
    }
    ::-webkit-scrollbar {
      display: none !important;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #006400 !important;
    }
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
      display: none;
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