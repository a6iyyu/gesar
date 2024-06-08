import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/404.jsx";
import { Index } from "../pages/index.jsx";
import { About } from "../pages/about.jsx";
import { Blog } from "../pages/blog.jsx";
import { Chat } from "../pages/chat.jsx";
import { SignUpPage } from "../pages/sign-up.jsx";
import { SignInPage } from "../pages/sign-in.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={Index} />
        <Route path="/about" Component={About} />
        <Route path="/blog" Component={Blog} />
        <Route path="/chat" Component={Chat} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/sign-in" Component={SignInPage} />
      </Routes>
    </BrowserRouter>
  );
};