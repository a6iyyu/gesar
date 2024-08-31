import ReactParallaxTilt from "react-parallax-tilt";
import { PropsAturan } from "@/data/aturan";

export const AturanKomunitas = () => {
  const MacamAturan = (item) => (
    <div key={item.id} className="flex">
      <span className="-mb-7 mt-7 flex flex-col items-center">
        <span className="h-2.5 w-2.5 rounded-full bg-[#006400]" />
        <span className="h-full w-0.5 bg-[#006400]" />
      </span>
      <span className="ml-3 mt-4 flex flex-col first:mt-2">
        <h3 className="text-xl md:text-2xl">{item.judul}</h3>
        <h5 className="text-base md:text-lg">{item.deskripsi}</h5>
      </span>
    </div>
  );

  return (
    <main className="h-fit w-full bg-gradient-to-bl from-[#c1a88a] to-[#d2ac7e] pt-28">
      <div className="z-20 mx-auto grid w-4/5 grid-cols-1 gap-x-10 text-[#006400] lg:grid-cols-2">
        <ReactParallaxTilt className="grid h-full w-full place-items-center">
          <img src="/buat-komunitas.png?url" alt="Bangun Komunitas Anda!" loading="lazy" />
        </ReactParallaxTilt>
        <section className="flex cursor-default flex-col justify-center">
          <h2 className="mt-6 text-center text-2xl font-bold md:text-3xl lg:mt-0 lg:text-left">
            Panduan dan Aturan Komunitas
          </h2>
          <section className="mt-2.5 grid grid-cols-1 text-justify font-medium">
            {PropsAturan.map(MacamAturan)}
          </section>
        </section>
      </div>
    </main>
  );
};