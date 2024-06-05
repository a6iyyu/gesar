import React from "react";
import { WebsiteMeta } from "../hooks/website-meta.jsx";
import { ScrollIndicator } from "../components/global/scroll-indicator.jsx";
import { Header } from "../components/global/header.jsx";
import { AboutHero } from "../components/about/hero.jsx";
import { Footer } from "../components/global/footer.jsx";

export const About = () => {
  return (
    <>
      <WebsiteMeta
        title={"Berkenalan Dengan Gesar"}
        description={""}
        icon={""}
      />
      <ScrollIndicator />
      <Header />
      <AboutHero />
      <Footer />
    </>
  );
};