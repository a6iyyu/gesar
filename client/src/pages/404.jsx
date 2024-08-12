import { WebsiteMeta } from "@/common/website-meta.jsx";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header.jsx";
import { Redirect } from "@/components/404/redirect.jsx";
import { Footer } from "@/common/footer.jsx";

export const TidakDitemukan = () => {
  return (
    <>
      <WebsiteMeta title="404: Halaman Tidak Ditemukan!" description="Sayang sekali, halaman yang Anda cari tidak ditemukan." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <Redirect />
      <Footer />
    </>
  );
};