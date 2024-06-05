import React from "react";
import { WebsiteMeta } from "../hooks/website-meta.jsx";
import { ScrollIndicator } from "../components/global/scroll-indicator.jsx";
import { Header } from "../components/global/header.jsx";
import { Redirect } from "../components/404/redirect.jsx";
import { Footer } from "../components/global/footer.jsx";

export const NotFoundPage = () => {
  return (
    <>
      <WebsiteMeta
        title={"404: Not Found!"}
        description={"Sayang sekali, halaman yang Anda cari tidak tersedia di Gesar."}
        icon={""}
      />
      <ScrollIndicator />
      <Header />
      <Redirect />
      <Footer />
    </>
  );
};