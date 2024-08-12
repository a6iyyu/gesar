import { HoverSetiapHuruf, HandleMouseEnter, HandleMouseLeave } from "@/utils/hover-setiap-huruf";

export const BerandaHero = () => {
  return (
    <main className="mx-auto mb-32 mt-24 flex h-fit w-4/5 flex-col-reverse items-center justify-center gap-x-20 text-[#006400] xl:flex-row xl:justify-between">
      <span className="absolute right-0 top-40 -z-10 h-40 w-40 bg-[#083710] [filter:blur(10rem)]" />
      <section className="mt-10 flex h-full w-full cursor-default flex-col items-center text-justify xl:mt-0 xl:items-start">
        <h2 className="hidden text-left text-5xl font-bold [line-height:1.175] xl:inline">
          {HoverSetiapHuruf("Kesehatan Mental Adalah Prioritas", HandleMouseEnter, HandleMouseLeave)}
        </h2>
        <h2 className="inline text-center text-4xl font-bold leading-tight md:text-5xl xl:hidden">
          Kesehatan Mental Adalah Prioritas
        </h2>
        <h4 className="mt-6 w-full text-xl font-medium [line-height:1.5] [text-align-last:center] md:w-3/5 xl:mt-5 xl:w-full xl:text-2xl xl:[text-align-last:left]">
          Raih kesehatan mental secara optimal dan prioritaskan kesejahteraan Anda dengan solusi efektif.
        </h4>
        <button id="mulai-sekarang" className="mt-10 h-fit w-fit cursor-pointer rounded-xl bg-[#006400] px-9 py-5 text-lg font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#014d01] hover:bg-[#017b01] xl:hover:scale-105">
          Mulai Sekarang&ensp;<i className="fa-solid fa-arrow-right text-base" />
        </button>
      </section>
      <img src="" alt="Welcome to Gesar!" className="transition-all duration-300 ease-in-out xl:hover:scale-105" loading="lazy" />
    </main>
  );
};