import { KaroselAhliKonsultasi } from "./karosel-ahli-konsultasi";
import { OpsiJadwal } from "./opsi-jadwal";

export const PilihAhli = () => {
  return (
    <main id="pilih-ahli" className="mx-auto mb-16 flex h-fit w-4/5 flex-col pt-20 text-[#006400]">
      <span className="absolute right-0 top-[60rem] -z-10 h-40 w-40 bg-[#083710] [filter:blur(10rem)]" />
      <span className="absolute left-0 top-[90rem] -z-10 h-40 w-40 bg-[#083710] [filter:blur(10rem)]" />
      <section className="flex items-center justify-between">
        <strong className="cursor-default text-3xl">Pilih Ahli Konsultasi</strong>
        <div className="hidden gap-2 md:flex">
          <span className="h-3 w-3 rounded-full bg-[#006400]" />
          <span className="h-3 w-3 rounded-full bg-[#006400]" />
          <span className="h-3 w-3 rounded-full bg-[#006400]" />
        </div>
      </section>
      <div className="h-0.5 w-full rounded-full bg-[#006400]" />
      <h4 className="mt-2 cursor-default text-xl font-medium">
        Buatlah janji temu untuk konsultasi melalui panggilan video.
      </h4>
      <OpsiJadwal />
      <KaroselAhliKonsultasi />
    </main>
  );
};