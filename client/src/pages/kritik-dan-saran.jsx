import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { KritikDanSaranHero } from "@/components/kritik-dan-saran/hero";
import { FormulirKritikDanSaran } from "@/components/kritik-dan-saran/formulir-kritik-dan-saran";
import { Footer } from "@/common/footer.jsx";

export const KritikDanSaran = () => {
  return (
    <>
      <WebsiteMeta title="Help - Kami Mendengar Keluhan dan Masukan Anda" description="" />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
			<KritikDanSaranHero />
      <FormulirKritikDanSaran />
      <Footer />
    </>
  );
};