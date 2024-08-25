import { Link } from "react-router-dom";
import styled from "styled-components";
import { PropsLayananKonsultasi } from "@/data/layanan-konsultasi";

const LayananKonsultasiCard = styled.main`
  @media screen and (max-width: 3120px) {
    section:hover {
      filter: blur(0);
      transform: scale(1.05);
    }
    &:hover section:not(:hover) {
      transform: scale(0.95);
      filter: blur(0.1rem);
    }
  }
  @media screen and (max-width: 1024px) {
    section:hover,
    &:hover section:not(:hover) {
      filter: blur(0);
      transform: scale(1);
    }
  }
`;

export const LayananKonsultasi = () => {
  return (
    <LayananKonsultasiCard className="mx-auto mt-8 grid h-fit w-4/5 cursor-default grid-cols-1 gap-y-8 text-[#006400] lg:grid-cols-3 lg:gap-x-8">
      <span className="absolute left-0 top-[30rem] -z-10 h-40 w-40 bg-[#083710] [filter:blur(10rem)]" />
      {PropsLayananKonsultasi.map(layanan =>
        <section key={layanan.id} className="h-full w-full rounded-xl bg-gradient-to-tl from-[#c1a88a] to-[#d2ac7e] px-8 py-6 transition-all duration-300 ease-in-out [box-shadow:_0.3rem_0.3rem_0_#d0be8f]">
          <strong className="text-2xl underline">{layanan.judul}</strong>
          <h4 className="mt-2 text-xl">{layanan.deskripsi}</h4>
          <div className="flex items-end justify-between">
            <Link to="/dashboard" className="fa-solid fa-arrow-left h-fit w-fit rounded-full bg-[#006400] p-4 text-xl text-slate-50 transition-all duration-300 ease-in-out lg:hover:bg-[#008000]" />
            <i className={`${layanan.ikon} mt-6 text-[6rem] opacity-50`} />
          </div>
        </section>
      )}
    </LayananKonsultasiCard>
  );
};