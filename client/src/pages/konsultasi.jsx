import { useEffect } from "react";
import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { KonsultasiHero } from "@/components/konsultasi/hero";
import { LayananKonsultasi } from "@/components/konsultasi/layanan-konsultasi";
import { PilihAhli } from "@/components/konsultasi/pilih-ahli";
import { Footer } from "@/common/footer.jsx";

export const Konsultasi = () => {
  useEffect(() => {
    document.getElementById("mulai-konsultasi").addEventListener("click", () => {
      document.getElementById("pilih-ahli").scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Konsultasi - Disinilah Anda Mendapatkan Kesejahteraan Mental" description="Dapatkan konsultasi kesehatan mental dengan para ahli. Mulai perjalanan Anda menuju kesejahteraan mental yang lebih baik dengan dukungan pribadi dan rahasia dari para profesional kami." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <KonsultasiHero />
      <LayananKonsultasi />
      <PilihAhli />
      <Footer />
    </>
  );
};