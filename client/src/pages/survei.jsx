import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { SurveiHero } from "@/components/survei/hero";
import { Footer } from "@/common/footer.jsx";

export const Survei = () => {
  return (
    <>
      <WebsiteMeta title="Survei - Yuk Kenali Dirimu Disini" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <SurveiHero />
      <Footer />
    </>
  );
};