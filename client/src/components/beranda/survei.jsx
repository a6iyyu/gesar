import { TigaPertanyaanDiSurvei } from "./tiga-pertanyaan-di-survei";
import { DeskripsiSurvei } from "./deskripsi-survei";

export const BerandaSurvei = () => {
  return (
    <main className="h-fit w-full bg-gradient-to-r from-[#ac906d] to-[#ba8c54] py-20 lg:pb-[7.5rem]">
      <span className="absolute left-0 top-[190rem] -z-0 h-40 w-40 bg-[#128b26] [filter:blur(7rem)]" />
      <section className="z-20 mx-auto grid w-4/5 grid-cols-1 gap-x-10 text-[#006400] lg:grid-cols-2">
        <TigaPertanyaanDiSurvei />
        <DeskripsiSurvei />
      </section>
    </main>
  );
};