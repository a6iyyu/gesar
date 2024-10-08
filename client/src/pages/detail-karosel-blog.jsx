import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { ScrollToTop } from "@/common/scroll-to-top";
import { Header } from "@/common/header";
import { Footer } from "@/common/footer";
import { TidakDitemukan } from "./404";
import { LoadingPage } from "@/common/loading-page";

export const DetailKaroselBlog = () => {
  const { slug } = useParams();
  const [MDXContent, setMDXContent] = useState(null);
  const [MDXFrontmatter, setMDXFrontmatter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { default: Component, frontmatter } = await import(`../content/${slug}.mdx`);
        setMDXContent(() => Component);
        setMDXFrontmatter(frontmatter);
        setNotFound(false);
      } catch (e) {
        console.error(e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) return <LoadingPage />;
  if (notFound || !MDXContent || !MDXFrontmatter) return <TidakDitemukan />;

  return (
    <>
      <WebsiteMeta title={MDXFrontmatter.judul || "404: Halaman Tidak Ditemukan!"} description={MDXFrontmatter.deskripsi || "Sayang sekali, halaman yang Anda cari tidak ditemukan."} />
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <main className="mx-auto mb-40 mt-16 h-fit w-4/5 cursor-default text-justify font-normal text-[#006400] lg:mt-28">
        <MDXProvider>
          <section className="mb-10 inline h-fit w-full lg:hidden">
            <img src={MDXFrontmatter.gambar} alt={MDXFrontmatter.judul} className="h-full w-full rounded-xl object-cover transition-all duration-300 ease-in-out [box-shadow:0.4rem_0.4rem_0_#bcbcbc50] lg:hover:scale-[1.025]" />
          </section>
          <MDXContent />
        </MDXProvider>
      </main>
      <Footer />
    </>
  );
};