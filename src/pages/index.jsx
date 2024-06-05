import React from "react";
import { WebsiteMeta } from "../hooks/website-meta.jsx";
import { ScrollIndicator } from "../components/global/scroll-indicator.jsx";
import { Header } from "../components/global/header.jsx";
import { IndexHero } from "../components/index/hero.jsx";
import { Footer } from "../components/global/footer.jsx";

export const Index = () => {
  return (
    <>
      <WebsiteMeta
        title={"Gesar: Aplikasi Kesehatan Sederhana"}
        description={""}
        icon={""}
      />
      <ScrollIndicator />
      <Header />
      <IndexHero />
      <Footer />
    </>
  );
};