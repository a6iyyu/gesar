export const KonsultasiHero = () => {
  return (
    <main className="mx-auto mt-20 flex h-fit w-4/5 rounded-xl bg-gradient-to-tl from-[#c1a88a] to-[#d2ac7e] text-[#006400] [box-shadow:_0.3rem_0.3rem_0_#d0be8f] lg:mt-10">
      <span className="absolute right-0 top-0 -z-10 h-40 w-40 bg-[#083710] [filter:blur(10rem)]" />
      <section className="flex w-full cursor-default flex-col justify-center p-10 text-justify lg:w-3/5">
        <h2 className="text-3xl font-black lg:text-4xl">
          Dapatkan Konsultasi Terpercaya Kapan Saja
        </h2>
        <h4 className="mt-3 text-lg lg:text-2xl">
          Terhubung dengan ahli psikologi dan dapatkan bantuan profesional yang
          sesuai dengan kebutuhan Anda. Konsultasi mudah, nyaman, dan aman.
        </h4>
        <button id="mulai-konsultasi" className="mt-6 h-fit w-fit cursor-pointer rounded-xl bg-[#006400] px-9 py-5 text-base font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#014d01] hover:bg-[#017b01] lg:text-lg lg:hover:scale-105">
          Mulai Konsultasi&ensp;
          <i className="fa-solid fa-arrow-right text-base" />
        </button>
      </section>
      <div className="grid place-items-center lg:w-2/5">
        <img src="/konsultasi.png?url" alt="Konsultasi" className="mr-14 h-full hidden lg:inline" loading="lazy" />
      </div>
    </main>
  );
};