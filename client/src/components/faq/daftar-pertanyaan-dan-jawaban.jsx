import { MenuPertanyaan } from "./menu-pertanyaan";
import { DetailPertanyaanDanJawaban } from "./detail-pertanyaan-dan-jawaban";

export const DaftarPertanyaanDanJawaban = () => {
  return (
    <main className="h-fit w-full bg-gradient-to-bl from-[#c1a88a] to-[#d2ac7e] pb-20">
      <section className="mx-auto flex h-fit w-4/5 flex-col items-center justify-center">
        <img src="/faq.png?url" alt="Frequently Asked Question" className="mt-20 h-fit w-fit italic text-slate-50 transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
        <section className="mt-20 flex h-fit w-full flex-col lg:flex-row">
          <MenuPertanyaan />
          <DetailPertanyaanDanJawaban />
        </section>
      </section>
    </main>
  );
};