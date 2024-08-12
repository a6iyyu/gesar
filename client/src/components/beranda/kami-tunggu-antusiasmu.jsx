import { Link } from "react-router-dom";

export const KamiTungguAntusiasmu = () => {
  return (
    <main className="z-20 h-fit w-full bg-gradient-to-r from-[#ac906d] to-[#ba8c54] pb-40 pt-20 lg:pb-[7.5rem]">
      <section className="mx-auto flex h-full w-4/5 flex-col items-center text-slate-50">
        <h3 className="cursor-default text-3xl font-extrabold">
          Kami Tunggu Antusiasmu!
        </h3>
        <h5 className="mt-4 cursor-default text-justify text-lg tracking-wider [text-align-last:center] lg:text-xl">
          Menuntut ilmu di Sube jauh lebih menyenangkan&nbsp;
          <br className="hidden lg:flex" />
          dan bisa dilakukan dimana saja!
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