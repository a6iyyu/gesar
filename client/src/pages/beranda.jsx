import { WebsiteMeta } from "@/common/website-meta.jsx";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { Header } from "@/common/header.jsx";
import { BerandaHero } from "@/components/beranda/hero.jsx";
import { TujuanDanManfaat } from "@/components/beranda/tujuan-dan-manfaat";
import { Footer } from "@/common/footer.jsx";

export const Beranda = () => {
  return (
    <>
      <WebsiteMeta title="Gesar - Aplikasi Kesehatan Mental #1 di Indonesia" description="" />
      <ScrollIndicator />
      <Header />
      <BerandaHero />
      <TujuanDanManfaat />
      <Footer />
    </>
  );
};