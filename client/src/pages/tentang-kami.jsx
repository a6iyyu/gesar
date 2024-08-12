import { WebsiteMeta } from "@/common/website-meta.jsx";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header.jsx";
import { TentangKamiHero } from "@/components/tentang-kami/hero.jsx";
import { Footer } from "@/common/footer.jsx";

export const TentangKami = () => {
  return (
    <>
      <WebsiteMeta title="Berkenalan Dengan Gesar" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <TentangKamiHero />
      <Footer />
    </>
  );
};