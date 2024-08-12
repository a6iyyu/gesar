import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { KomunitasHero } from "@/components/komunitas/hero";
import { Footer } from "@/common/footer.jsx";

export const Komunitas = () => {
  return (
    <>
      <WebsiteMeta title="" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <KomunitasHero />
      <Footer />
    </>
  );
};