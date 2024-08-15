import { Link } from "react-router-dom";

export const KenalLebihDekat = () => {
  return (
    <main className="z-10 h-fit w-full bg-gradient-to-r from-[#ac906d] to-[#ba8c54] pb-20">
      <Link to="/tentang-kami">
        <section className="mx-auto h-full w-4/5 rounded-xl bg-[#d0be8f] bg-cover bg-center bg-no-repeat text-white transition-all duration-300 ease-in-out [background-image:_url('/kenal-lebih-dekat.jpg?url')] [box-shadow:0.3rem_0.3rem_0_#bcbcbc50] lg:bg-contain lg:bg-right text-[#006400] lg:hover:scale-[1.025]">
          <h4 className="group hidden h-fit w-1/2 p-12 text-justify font-medium leading-relaxed lg:inline-block">
            <span className="lg:bg-gradient-to-r lg:from-slate-50 lg:to-slate-50 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
              Kami adalah penyedia program kesehatan mental yang berkomitmen
              untuk meningkatkan kesejahteraan emosional dan psikologis. Melalui
              berbagai artikel informatif, sesi konsultasi dengan ahli, dan
              aktivitas interaktif, kami membantu individu memahami dan
              mengelola kesehatan mental mereka dengan lebih baik. Dukungan kami
              mencakup panduan praktis, teknik relaksasi, dan komunitas aktif
              yang mendukung, memastikan setiap orang mendapatkan dukungan yang
              diperlukan untuk mengatasi tantangan mental mereka.
            </span>
          </h4>
          <h4 className="flex justify-center px-10 pb-10 pt-60 text-3xl font-bold lg:hidden">
            Tak kenal, maka tak sayang.
          </h4>
        </section>
      </Link>
    </main>
  );
};