import { Link } from "react-router-dom";

export const DeskripsiSurvei = () => {
  return (
    <section className="mt-7 flex cursor-default flex-col justify-center lg:mt-0">
      <h2 className="text-center text-2xl font-bold lg:text-left">
        Kenali Dirimu Lebih Dalam
      </h2>
      <h4 className="mt-2.5 text-justify text-lg font-medium [text-align-last:_center] lg:[text-align-last:_left]">
        Ikuti survei seru kami untuk mendapatkan gambaran lengkap tentang
        kepribadian dan suasana hati kamu. Dengan pertanyaan-pertanyaan yang
        simpel dan <em>insightful</em>, kamu akan mendapatkan pemahaman yang
        bermanfaat untuk memahami diri sendiri lebih baik. Ayo, mulai sekarang
        dan temukan lebih banyak tentang dirimu!
      </h4>
      <Link to="/konsultasi" className="mx-auto mt-6 h-fit w-fit cursor-pointer rounded-xl bg-[#006400] px-9 py-5 text-lg font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#014d01] hover:bg-[#017b01] lg:mx-0 xl:hover:scale-105">
        Ambil Tes Sekarang
      </Link>
    </section>
  );
};