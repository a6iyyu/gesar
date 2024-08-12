import styled from "styled-components";
import { PropsTujuanDanManfaat } from "@/data/props-tujuan-dan-manfaat";

const TujuanDanManfaatCard = styled.section`
  @media screen and (max-width: 3120px) {
    div:hover {
      filter: blur(0);
      transform: scale(1.05);
    }
    &:hover div:not(:hover) {
      transform: scale(0.95);
      filter: blur(0.1rem);
    }
  }
  @media screen and (max-width: 1024px) {
    div:hover,
    &:hover div:not(:hover) {
      filter: blur(0);
      transform: scale(1);
    }
  }
`;

export const TujuanDanManfaat = () => {
  return (
    <main id="tujuan-dan-manfaat" className="flex w-full cursor-default flex-col bg-gradient-to-tl from-[#c1a88a] to-[#d2ac7e] pb-20 pt-14 text-[#006400]">
      <span className="absolute left-0 top-[80rem] -z-0 h-40 w-40 bg-[#128b26] [filter:blur(10rem)]" />
      <h3 className="mx-auto mb-2.5 h-fit w-4/5 text-center text-4xl font-bold text-slate-50">
        Tujuan Program Kami
      </h3>
      <h5 className="mx-auto mb-9 h-fit w-4/5 text-center text-2xl font-medium text-slate-50">
        Apa saja ya tujuan dan manfaat yang diperoleh dari Gesar? Simak yuk!
      </h5>
      <TujuanDanManfaatCard className="mx-auto grid w-4/5 grid-cols-1 gap-x-10 lg:grid-cols-3">
        {PropsTujuanDanManfaat.slice(0, 3).map(props => (
          <div key={props.id} className="mt-10 flex flex-col items-center justify-start transition-all duration-300 ease-in-out first:mt-0 lg:mt-0">
            <span className="z-10 grid place-items-center rounded-full bg-[#d0be8f] p-10">
              <img src={props.gambar} alt={props.judul} className="object-fit h-24 w-24" />
            </span>
            <span className="z-0 -mt-20 flex h-full w-full flex-col rounded-lg bg-[#fbe5ac] pt-28 [box-shadow:_0.5rem_0.5rem_0_#d0be8f]">
              <strong className="mx-auto grid w-4/5 place-items-center text-center text-2xl">
                {props.judul}
              </strong>
              <h4 className="mx-auto mt-5 grid w-4/5 place-items-center pb-12 text-justify text-lg [text-align-last:center]">
                {props.deskripsi}
              </h4>
            </span>
          </div>
        ))}
      </TujuanDanManfaatCard>
      <TujuanDanManfaatCard className="mx-auto mt-12 hidden w-4/5 grid-cols-1 gap-x-10 lg:grid lg:grid-cols-2">
        {PropsTujuanDanManfaat.slice(3, 5).map(props => (
          <div key={props.id} className="mt-10 flex flex-col items-center justify-start transition-all duration-300 ease-in-out first:mt-0 lg:mt-0">
            <span className="z-10 grid place-items-center rounded-full bg-[#d0be8f] p-10">
              <img src={props.gambar} alt={props.judul} className="object-fit h-24 w-24" />
            </span>
            <span className="z-0 -mt-20 flex h-full w-full flex-col rounded-lg bg-[#fbe5ac] pt-28 [box-shadow:_0.5rem_0.5rem_0_#d0be8f]">
              <strong className="mx-auto grid w-4/5 place-items-center text-center text-2xl">
                {props.judul}
              </strong>
              <h4 className="mx-auto mt-5 grid w-4/5 place-items-center pb-12 text-justify text-lg [text-align-last:center]">
                {props.deskripsi}
              </h4>
            </span>
          </div>
        ))}
      </TujuanDanManfaatCard>
    </main>
  );
};