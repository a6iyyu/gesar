import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { KomunitasHero } from "@/components/komunitas/hero";
import { Footer } from "@/common/footer.jsx";

export const Komunitas = () => {
  return (
    <>
      <WebsiteMeta title="Komunitas - Bersama Merawat Kesehatan Mental" description="Bergabunglah dengan komunitas kami, tempat untuk berbagi pengalaman, mendapatkan dukungan, dan belajar bersama tentang kesehatan mental. Temukan dukungan dari sesama dan ahli di aplikasi kami." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <KomunitasHero />
      <Footer />
    </>
  );
};