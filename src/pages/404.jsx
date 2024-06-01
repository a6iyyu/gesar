import React from "react";
import { Title } from "../hooks/website-title.jsx";
import { Header } from "../components/global/header.jsx";
import { Warning } from "../components/404/404.jsx";
import { Footer } from "../components/global/footer.jsx";

export const NotFoundPage = () => {
  Title("404: Not Found!");

  return (
    <>
      <Header />
      <Warning />
      <Footer />
    </>
  );
};