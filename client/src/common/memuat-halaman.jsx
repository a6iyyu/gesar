import React from "react";
import styled from "styled-components";
import { WebsiteMeta } from "@/common/website-meta";
import { Header } from "@/common/header";
import { Footer } from "@/common/footer";

const BounceLoading = styled.div`
  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translate3d(0, -1rem, 0);
    }
  }
  & > span {
    animation: bouncing-loader 0.6s infinite alternate;
  }
`;

export const MemuatHalaman = () => {
  return (
    <>
      <WebsiteMeta title="Sedang Memuat Halaman . . ." description="Kami sedang menyajikan konten yang terbaik untuk Anda . . ." />
      <Header />
      <main className="mx-auto mb-40 mt-16 flex h-96 w-4/5 cursor-default flex-col items-center justify-center text-slate-50">
        <BounceLoading className="flex justify-center">
          <span className="mx-1 my-12 h-4 w-4 animate-bounce rounded-full bg-slate-50" style={{ animationDelay: "0s" }} />
          <span className="mx-1 my-12 h-4 w-4 animate-bounce rounded-full bg-slate-50" style={{ animationDelay: "0.2s" }} />
          <span className="mx-1 my-12 h-4 w-4 animate-bounce rounded-full bg-slate-50" style={{ animationDelay: "0.4s" }} />
        </BounceLoading>
        <h2 className="text-3xl font-extrabold">Memuat Halaman</h2>
        <h4 className="mt-1.5">Konten Sedang Dimuat, Mohon Ditunggu</h4>
      </main>
      <Footer />
    </>
  );
};