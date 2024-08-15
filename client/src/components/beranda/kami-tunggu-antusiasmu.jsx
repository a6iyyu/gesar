import { Link } from "react-router-dom";

export const KamiTungguAntusiasmu = () => {
  return (
    <main className="h-fit w-full bg-gradient-to-r from-[#ac906d] to-[#ba8c54] pb-20 lg:pb-[7.5rem]">
      <span className="absolute right-0 top-[240rem] -z-0 h-40 w-40 bg-[#128b26] [filter:blur(7rem)]" />
      <section className="mx-auto flex h-full w-4/5 flex-col items-center text-slate-50">
        <h3 className="cursor-default text-3xl font-extrabold">
          Kami Tunggu Antusiasmu!
        </h3>
        <h5 className="mt-4 cursor-default text-justify text-lg tracking-wider [text-align-last:center] lg:text-xl">
          Tunggu apa lagi? Daftar dan mulai perjalanan menuju
          kesejahteraan&nbsp;
          <br className="hidden lg:flex" />
          mental dengan konsultasi yang personal dan efektif!
        </h5>
        <span className="mt-8 flex gap-x-6">
          <Link to={`/registrasi`} className="h-fit w-fit rounded-lg bg-[#006400] px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:bg-[#017b01]">
            BUAT AKUN
          </Link>
          <Link to={`/masuk`} className="h-fit w-fit rounded-lg bg-[#393333] px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:bg-[#4d4d4d]">
            MASUK
          </Link>
        </span>
      </section>
    </main>
  );
};