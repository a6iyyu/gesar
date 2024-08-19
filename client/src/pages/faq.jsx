import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { FAQHero } from "@/components/faq/hero";
import { TigaPertanyaan } from "@/components/faq/tiga-pertanyaan";
import { DaftarPertanyaanDanJawaban } from "@/components/faq/daftar-pertanyaan-dan-jawaban";
import { Footer } from "@/common/footer.jsx";

export const FAQ = () => {
  return (
    <>
      <WebsiteMeta title="FAQ - Menjawab Penasaran Anda" description="Temukan jawaban atas pertanyaan umum tentang Gesar. Pelajari lebih lanjut tentang layanan konsultasi, fitur aplikasi, dan cara bergabung dengan komunitas kesehatan mental kami." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <FAQHero />
      <TigaPertanyaan />
      <DaftarPertanyaanDanJawaban />
      <Footer />
    </>
  );
};