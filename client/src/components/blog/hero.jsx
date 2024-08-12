import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HoverSetiapHuruf, HandleMouseEnter, HandleMouseLeave } from "@/utils/hover-setiap-huruf";

export const BlogHero = () => {
  const kalimat = useRef(null);

  useEffect(() => {
    const typed = new Typed(kalimat.current, {
      backSpeed: 50,
      loop: true,
      strings: [
        "Bingung mau ngapain?",
        "Kamu gabut ya?",
        "Pengen belajar?",
        "Cari inspirasi baru?",
      ],
      typeSpeed: 50,
    });
    return () => typed.destroy();
  }, []);

  return (
    <main className="mx-auto mb-44 mt-28 flex h-fit w-4/5 cursor-default flex-col justify-center text-[#006400] lg:w-3/5">
      <span className="absolute left-0 h-40 w-40 bg-[#4ea9b9] opacity-50 [filter:blur(8rem)]" />
      <span className="absolute right-0 h-40 w-40 bg-[#0aa2bd] opacity-50 [filter:blur(8rem)]" />
      <div className="mb-4 inline text-5xl font-bold">
        <span ref={kalimat} />
      </div>
      <h2 className="hidden text-5xl font-bold xl:inline">
        {HoverSetiapHuruf("Yuk, bacain artikelnya disini!", HandleMouseEnter, HandleMouseLeave)}
      </h2>
      <h2 className="inline text-5xl font-bold xl:hidden">
        Yuk, bacain artikelnya disini!
      </h2>
      <h5 className="mt-6 text-justify text-base font-medium italic lg:text-lg">
        Di sini, Anda dapat menemukan berbagai artikel menarik yang akan
        menambah wawasan dan pengetahuan Anda tentang kesehatan mental.
        <span className="hidden lg:inline">
          &nbsp;Jangan lewatkan kesempatan untuk belajar hal-hal baru setiap
          hari melalui artikel-artikel bermanfaat dan informatif yang kami
          sediakan.
        </span>
      </h5>
    </main>
  );
};