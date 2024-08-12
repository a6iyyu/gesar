import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { KonsultasiHero } from "@/components/konsultasi/hero";
import { Footer } from "@/common/footer.jsx";

export const Konsultasi = () => {
  return (
    <>
      <WebsiteMeta title="" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <KonsultasiHero />
      <Footer />
    </>
  );
};