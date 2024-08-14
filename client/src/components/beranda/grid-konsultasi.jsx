import { Link } from "react-router-dom";
import { PropsKonsultasi } from "@/data/props-konsultasi";

export const GridKonsultasi = () => {
  return (
    <div className="z-10 h-fit w-full rounded-xl bg-[#fbe5ac] pb-10 text-[#006400] [box-shadow:_0.5rem_0.5rem_0_#d0be8f]">
      <span className="mx-auto flex h-fit w-[85%] flex-col py-5">
        <img src={PropsKonsultasi[4].gambar} alt={PropsKonsultasi[4].kalimat} className="mx-auto mt-3 h-20 w-20 text-xs lg:mx-0" loading="lazy" />
        <h3 className="mt-4 text-center text-3xl font-bold lg:text-left">{PropsKonsultasi[4].kalimat}</h3>
        <h5 className="mt-4 text-justify text-xl font-medium [text-align-last:center] lg:[text-align-last:_left]">
          Yuk, jangan ragu buat dapetin dukungan secara emosional dan
          konsultasikan keluhanmu pada tim kami. Klik di bawah buat memulai
          konsultasi bersama ahli kesehatan mental kami.
          <br />
          #MenujuIndonesiaSehat
        </h5>
        <Link to="/konsultasi" className="mx-auto mt-10 h-fit w-fit cursor-pointer rounded-xl bg-[#006400] px-9 py-5 text-lg font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#014d01] hover:bg-[#017b01] lg:mx-0 xl:hover:scale-105">
          Saatnya Konsultasi
        </Link>
      </span>
    </div>
  );
};