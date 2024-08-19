import { WebsiteMeta } from "@/common/website-meta.jsx";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header.jsx";
import { SambutanDariPengembang } from "@/components/tentang-kami/sambutan-dari-pengembang.jsx";
import { MengenalPengembangGesar } from "@/components/tentang-kami/mengenal-pengembang-gesar";
import { HubungiKami } from "../components/tentang-kami/hubungi-kami";
import { Footer } from "@/common/footer.jsx";

export const TentangKami = () => {
  return (
    <>
      <WebsiteMeta title="Berkenalan Dengan Kami" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <SambutanDariPengembang />
      <MengenalPengembangGesar />
      <HubungiKami />
      <Footer />
    </>
  );
};