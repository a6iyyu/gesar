export const KonsultasiHero = () => {
  return (
    <main className="mx-auto mt-10 flex h-fit w-4/5 rounded-xl bg-gradient-to-tl from-[#c1a88a] to-[#d2ac7e] text-[#006400]">
      <section className="flex w-3/5 cursor-default flex-col justify-center p-10 text-justify">
        <h2 className="text-4xl font-black">
          Dapatkan Konsultasi Terpercaya Kapan Saja
        </h2>
        <h4 className="mt-3 text-2xl">
          Terhubung dengan ahli psikologi dan dapatkan bantuan profesional yang
          sesuai dengan kebutuhan Anda. Konsultasi mudah, nyaman, dan aman.
        </h4>
        <button id="konsultasi-sekarang" className="mt-6 h-fit w-fit cursor-pointer rounded-xl bg-[#006400] px-9 py-5 text-lg font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#014d01] hover:bg-[#017b01] lg:hover:scale-105">
          Mulai Konsultasi&ensp;
          <i className="fa-solid fa-arrow-right text-base" />
        </button>
      </section>
      <div className="grid w-2/5 place-items-center">
        <img src="/konsultasi.png?url" alt="Konsultasi" className="mr-14 h-full" loading="lazy" />
      </div>
    </main>
  );
};