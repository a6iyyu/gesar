import { HandleMouseEnter, HandleMouseLeave, HoverSetiapHuruf } from "@/utils/hover-setiap-huruf";

export const KritikDanSaranHero = () => {
  return (
    <main className="mx-auto mb-32 mt-20 flex h-fit w-4/5 flex-col-reverse items-center text-[#006400] lg:grid lg:grid-cols-2">
      <span className="absolute left-0 top-0 h-40 w-40 bg-[#ff85ad] opacity-80 [filter:blur(8rem)]" />
      <span className="absolute right-0 top-[40rem] h-40 w-40 bg-[#0aa2bd] opacity-80 [filter:blur(8rem)]" />
      <section className="flex cursor-default flex-col justify-center">
        <h1 className="mt-10 hidden text-center text-5xl font-bold leading-tight lg:mt-0 lg:inline lg:text-left">
          {HoverSetiapHuruf("Bantu Kami Menjadi ", HandleMouseEnter, HandleMouseLeave)}
        </h1>
        <h1 className="mt-10 hidden text-center text-5xl font-bold leading-tight lg:mt-0 lg:inline lg:text-left">
          {HoverSetiapHuruf("Lebih Baik", HandleMouseEnter, HandleMouseLeave)}
        </h1>
        <h1 className="mt-10 inline text-center text-5xl font-bold leading-tight lg:mt-0 lg:hidden lg:text-left">
          Bantu Kami Menjadi&nbsp;
          <br className="inline lg:hidden" />
          Lebih Baik
        </h1>
        <h4 className="mt-4 text-justify text-lg font-medium tracking-wide [text-align-last:center] lg:[text-align-last:left]">
          Kritik dan saran Anda adalah bagian penting dari upaya kami untuk
          terus berinovasi dan berkembang. Bagikan pandangan Anda agar kami
          dapat memperbaiki dan meningkatkan kualitas program dan layanan yang
          kami tawarkan.
        </h4>
      </section>
      <section className="flex h-full w-full justify-end">
        <img src="/feedback.png?url" alt="Feedback" className="h-[27rem] w-fit object-contain transition-all duration-300 ease-in-out lg:hover:scale-105" />
      </section>
    </main>
  );
};