import { DeskripsiFiturBlog } from "./deskripsi-fitur-blog";
import { KaroselBlog } from "./karosel-blog";

export const BerandaBlog = () => {
  return (
    <main className="flex w-full cursor-default flex-col bg-gradient-to-tl from-[#c1a88a] to-[#d2ac7e] pb-20 text-[#006400]">
      <span className="absolute right-0 top-[145rem] -z-0 h-40 w-40 bg-[#128b26] [filter:blur(7rem)]" />
      <section className="mx-auto grid w-4/5 grid-cols-1 gap-x-10 lg:grid-cols-2">
        <DeskripsiFiturBlog />
        <KaroselBlog />
      </section>
    </main>
  );
};