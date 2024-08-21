import { useEffect } from "react";
import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { KomunitasHero } from "@/components/komunitas/hero";
import { Manfaat } from "@/components/komunitas/manfaat";
import { BuatKomunitas } from "@/components/komunitas/buat-komunitas";
import { CariKomunitas } from "@/components/komunitas/cari-komunitas";
import { Footer } from "@/common/footer.jsx";

export const Komunitas = () => {
  useEffect(() => {
    document.getElementById("temukan-komunitas").addEventListener("click", () => {
      document.getElementById("manfaat").scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <WebsiteMeta title="Komunitas - Bersama Merawat Kesehatan Mental" description="Bergabunglah dengan komunitas kami, tempat untuk berbagi pengalaman, mendapatkan dukungan, dan belajar bersama tentang kesehatan mental. Temukan dukungan dari sesama dan ahli di aplikasi kami." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <KomunitasHero />
      <Manfaat />
      <BuatKomunitas />
      <CariKomunitas />
      <Footer />
    </>
  );
};