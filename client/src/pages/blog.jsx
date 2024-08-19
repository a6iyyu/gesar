import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator.jsx";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { BlogHero } from "@/components/blog/hero";
import { KaroselBlog } from "@/components/blog/karosel-blog";
import { Footer } from "@/common/footer.jsx";

export const Blog = () => {
  return (
    <>
      <WebsiteMeta title="Blog - Temukan Bacaan Informatif dan Menginspirasi Anda" description="Dapatkan inspirasi dan informasi terkini yang menghadirkan bacaan terbaru untuk Anda mengenai kesehatan mental." />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <BlogHero />
      <KaroselBlog />
      <Footer />
    </>
  );
};