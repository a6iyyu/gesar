import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { PermainanHero } from "@/components/permainan/hero";
import { Footer } from "@/common/footer.jsx";

export const Permainan = () => {
  return (
    <>
      <WebsiteMeta title="Permainan - Mari Kita Mulai" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <PermainanHero />
      <Footer />
    </>
  );
};