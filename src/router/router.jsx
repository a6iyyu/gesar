import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/404.jsx";
import { Index } from "../pages/index.jsx";
import { About } from "../pages/about.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={Index} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
};