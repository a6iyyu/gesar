import { useState } from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import { MenuPertanyaan } from "./menu-pertanyaan";
import { DetailPertanyaanDanJawaban } from "./detail-pertanyaan-dan-jawaban";

export const DaftarPertanyaanDanJawaban = () => {
  const [filteredAnswer, setFilteredAnswer] = useState(["Semua", "Umum", "Akun", "Memulai", "Komunitas", "Konsultasi", "Survei"]);

  return (
    <main className="h-fit w-full bg-gradient-to-bl from-[#c1a88a] to-[#d2ac7e] pb-20">
      <section className="mx-auto flex h-fit w-4/5 flex-col items-center justify-center">
        <ReactParallaxTilt>
          <img src="/faq.png?url" alt="Frequently Asked Question" className="mt-20 h-fit w-fit italic text-slate-50 transition-all duration-300 ease-in-out" loading="lazy" />
        </ReactParallaxTilt>
        <section className="mt-20 flex h-fit w-full flex-col lg:flex-row">
          <MenuPertanyaan setFilteredAnswer={setFilteredAnswer} />
          <DetailPertanyaanDanJawaban filteredAnswer={filteredAnswer} />
        </section>
      </section>
    </main>
  );
};