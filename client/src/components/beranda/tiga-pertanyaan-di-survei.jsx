import { useEffect } from "react";
import { PropsTigaPertanyaanDiSurvei } from "@/data/props-tiga-pertanyaan-di-survei";

export const TigaPertanyaanDiSurvei = () => {
  useEffect(() => {
    document.querySelectorAll("h5").forEach(h5 =>
      h5.addEventListener("click", () => h5.parentElement.querySelector("input").checked = true),
    );
  }, []);

  return (
    <section className="flex cursor-default flex-col justify-center">
      {PropsTigaPertanyaanDiSurvei.map(pertanyaan =>
        <div key={pertanyaan.id} className="my-2.5 flex h-fit w-full flex-col rounded-xl bg-[#fbe5ac] p-5 [box-shadow:_0.3rem_0.3rem_0_#d0be8f] first:mb-2.5 last:mt-2.5">
          <label htmlFor={`pertanyaan-${pertanyaan.id}`} className="mb-2 text-xl font-bold">
            {pertanyaan.pertanyaan}
          </label>
          <span className="flex">
            <input type="radio" name={`pertanyaan-${pertanyaan.id}`} id={`pertanyaan-${pertanyaan.id}`} className="mr-3" />
            <h5 className="cursor-pointer font-semibold">{pertanyaan.jawaban[0]}</h5>
          </span>
          <span className="flex">
            <input type="radio" name={`pertanyaan-${pertanyaan.id}`} id={`pertanyaan-${pertanyaan.id}`} className="mr-3" />
            <h5 className="cursor-pointer font-semibold">{pertanyaan.jawaban[1]}</h5>
          </span>
        </div>
      )}
    </section>
  );
};