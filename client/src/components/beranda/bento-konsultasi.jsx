import styled from "styled-components";
import { PropsKonsultasiDiBeranda } from "@/data/konsultasi-di-beranda";

const KonsultasiCard = styled.div`
  @media screen and (max-width: 3120px) {
    &:hover article:not(:hover) {
      transform: scale(0.95);
      filter: blur(0.1rem);
    }
  }
`;

export const BentoKonsultasi = () => {
  return (
    <KonsultasiCard className="hidden text-slate-50 lg:grid lg:grid-cols-2 lg:gap-4">
      {PropsKonsultasiDiBeranda.slice(0, 4).map(menu =>
        <article key={menu.id} id={menu.id} className="rounded-xl bg-[#fbe5ac] font-bold text-[#006400] transition-all duration-300 ease-in-out [box-shadow:_0.5rem_0.5rem_0_#d0be8f]">
          <span className="mx-auto flex h-fit w-3/4 flex-col py-5">
            <img src={menu.gambar} alt={menu.kalimat} className="mt-3 h-20 w-20 text-xs" loading="lazy" />
            <h3 className="my-3 text-2xl">{menu.kalimat}</h3>
          </span>
        </article>
      )}
    </KonsultasiCard>
  );
};