import { useEffect } from "react";
import { WebsiteMeta } from "@/common/website-meta.jsx";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header.jsx";
import { BerandaHero } from "@/components/beranda/hero.jsx";
import { TujuanDanManfaat } from "@/components/beranda/tujuan-dan-manfaat";
import { KamiTungguAntusiasmu } from "@/components/beranda/kami-tunggu-antusiasmu";
import { Footer } from "@/common/footer.jsx";

export const Beranda = () => {
  useEffect(() => {
    document.getElementById("mulai-sekarang").addEventListener("click", () => {
      document.getElementById("tujuan-dan-manfaat").scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Gesar - Aplikasi Kesehatan Mental #1 di Indonesia" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BerandaHero />
      <TujuanDanManfaat />
      <KamiTungguAntusiasmu />
      <Footer />
    </>
  );
};