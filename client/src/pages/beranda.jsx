import { useEffect } from "react";
import { WebsiteMeta } from "@/common/website-meta.jsx";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header.jsx";
import { BerandaHero } from "@/components/beranda/hero.jsx";
import { TujuanDanManfaat } from "@/components/beranda/tujuan-dan-manfaat";
import { Konsultasi } from "@/components/beranda/konsultasi";
import { BerandaBlog } from "@/components/beranda/blog";
import { BerandaSurvei } from "@/components/beranda/survei";
import { KenalLebihDekat } from "@/components/beranda/kenal-lebih-dekat";
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
      <WebsiteMeta title="Gesar - Aplikasi Kesehatan Mental #1 di Indonesia" description="Gesar adalah platform yang didedikasikan untuk kesehatan mental Anda. Temukan dukungan, konsultasi dengan ahli, artikel edukatif, dan komunitas yang peduli untuk membantu Anda mencapai kesejahteraan mental yang lebih baik." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BerandaHero />
      <TujuanDanManfaat />
      <Konsultasi />
      <BerandaBlog />
      <BerandaSurvei />
      <KenalLebihDekat />
      <KamiTungguAntusiasmu />
      <Footer />
    </>
  );
};