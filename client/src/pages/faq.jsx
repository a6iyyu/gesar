import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { Footer } from "@/common/footer.jsx";

export const FAQ = () => {
  return (
    <>
      <WebsiteMeta title="FAQ - Menjawab Penasaran Anda" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <Footer />
    </>
  );
};