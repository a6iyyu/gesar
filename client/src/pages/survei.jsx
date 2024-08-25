import { useEffect } from "react";
import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { SurveiHero } from "@/components/survei/hero";
import { HalamanBelumSiap } from "@/components/survei/halaman-belum-siap";
import { Footer } from "@/common/footer.jsx";

export const Survei = () => {
  useEffect(() => {
    document.getElementById("ambil-tes-sekarang").addEventListener("click", () => {
      document.getElementById("halaman-belum-siap").scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Survei - Yuk Kenali Dirimu Disini" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <SurveiHero />
      <HalamanBelumSiap />
      <Footer />
    </>
  );
};