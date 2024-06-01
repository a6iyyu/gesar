import React from "react";
import { Title } from "../hooks/website-title.jsx";
import { Header } from "../components/global/header.jsx";
import { Hero } from "../components/index/hero.jsx";
import { Footer } from "../components/global/footer.jsx";

export const Index = () => {
  Title("Home");

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};