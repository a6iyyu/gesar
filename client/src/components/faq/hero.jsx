import { HandleMouseEnter, HandleMouseLeave, HoverSetiapHuruf } from "@/utils/hover-setiap-huruf";

export const FAQHero = () => {
  return (
    <main className="mx-auto my-32 flex h-fit w-4/5 cursor-default flex-col items-center text-justify text-[#006400] lg:mt-36 lg:text-center">
      <span className="absolute left-0 top-24 z-0 h-40 w-40 bg-[#0bb7f6] [filter:blur(8rem)]" />
      <h2 className="hidden text-5xl font-bold leading-tight lg:inline">
        {HoverSetiapHuruf("Kamu ada pertanyaan?", HandleMouseEnter, HandleMouseLeave)}
        <br />
        {HoverSetiapHuruf("Kami ada jawaban!", HandleMouseEnter, HandleMouseLeave)}
      </h2>
      <h2 className="inline w-full text-3xl font-bold leading-tight sm:text-4xl lg:hidden">
        Kamu ada pertanyaan?
        <br />
        Kami ada jawaban!
      </h2>
      <h4 className="mt-6 text-base font-medium tracking-wider lg:w-3/5 lg:text-xl">
        Dapatkan jawaban atas pertanyaan Anda mengenai Gesar. Kami telah
        mengumpulkan informasi yang paling sering ditanyakan untuk memudahkan
        Anda.
      </h4>
    </main>
  );
};