import { DeskripsiFiturBlog } from "./deskripsi-fitur-blog";
import { KaroselBlog } from "./karosel-blog";

export const BerandaBlog = () => {
  return (
    <main className="flex w-full cursor-default flex-col bg-gradient-to-bl from-[#c1a88a] to-[#d2ac7e] pb-20 pt-14 text-[#006400]">
      <section className="mx-auto grid w-4/5 grid-cols-1 gap-x-10 lg:grid-cols-2">
        <DeskripsiFiturBlog />
        <KaroselBlog />
      </section>
    </main>
  );
};