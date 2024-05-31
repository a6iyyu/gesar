import React from "react";
import { Title } from "../hooks/website-title.jsx";
import { Header } from "../components/global/header.jsx";
import { Hero } from "../components/about/hero.jsx";
import { Footer } from "../components/global/footer.jsx";

export const Index = () => {
  Title("About");

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};