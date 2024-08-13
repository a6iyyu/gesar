import { BentoKonsultasi } from "./bento-konsultasi";
import { GridKonsultasi } from "./grid-konsultasi";

export const Konsultasi = () => {
  return (
    <main className="flex w-full cursor-default flex-col bg-gradient-to-bl from-[#c1a88a] to-[#d2ac7e] pb-20 text-[#006400]">
      <section className="mx-auto grid w-4/5 grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-0">
        <BentoKonsultasi />
        <GridKonsultasi />
      </section>
    </main>
  );
};