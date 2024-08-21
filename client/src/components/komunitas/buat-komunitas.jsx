import { Link } from "react-router-dom";
import ReactParallaxTilt from "react-parallax-tilt";

export const BuatKomunitas = () => {
  return (
    <main className="h-fit w-full bg-gradient-to-bl from-[#c1a88a] to-[#d2ac7e] pt-28">
      <section className="z-20 mx-auto grid w-4/5 grid-cols-1 gap-x-10 text-[#006400] lg:grid-cols-2">
        <ReactParallaxTilt className="h-full w-full">
          <img src="/buat-komunitas.png?url" alt="Bangun Komunitas Anda!" loading="lazy" />
        </ReactParallaxTilt>
        <div className="flex cursor-default flex-col justify-center">
          <h2 className="mt-6 text-center text-2xl font-bold lg:mt-0 lg:text-left">
            Jadilah Penggerak Komunitas Sehat
          </h2>
          <h4 className="mt-2.5 text-justify text-lg font-medium [text-align-last:_center] lg:[text-align-last:_left]">
            Di sini, Anda dapat menciptakan ruang untuk berbagi pengalaman,
            saling menguatkan, dan bersama-sama mencapai visi kesehatan mental
            yang lebih baik untuk semua anggota. Mulailah komunitas Anda dan
            jadilah pelopor dalam membangun dukungan yang kuat, berbagi
            pengetahuan, dan memperkuat semangat kebersamaan.
          </h4>
          <Link to="/buat-komunitas" className="mx-auto mt-6 h-fit w-fit cursor-pointer rounded-xl bg-[#006400] px-9 py-5 text-lg font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#014d01] hover:bg-[#017b01] lg:mx-0 xl:hover:scale-105">
            Mulai Bangun Komunitas
          </Link>
        </div>
      </section>
    </main>
  );
};