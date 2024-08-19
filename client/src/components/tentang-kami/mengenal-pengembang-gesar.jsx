import { Link } from "react-router-dom";
import ReactParallaxTilt from "react-parallax-tilt";

export const MengenalPengembangGesar = () => {
  return (
    <>
      <section className="mx-auto mt-20 flex h-fit w-4/5 cursor-default items-center justify-between text-left text-4xl font-bold text-[#006400] lg:mt-28 lg:text-center">
        <hr className="hidden h-1 w-1/4 rounded-full bg-[#006400] lg:inline" />
        <h3>Berkenalan Dengan Kami</h3>
        <hr className="hidden h-1 w-1/4 rounded-full bg-[#006400] lg:inline" />
      </section>
      <main className="mx-auto mt-14 flex h-fit w-4/5 cursor-default flex-col text-justify text-[#006400] lg:flex-row">
        <span className="absolute left-0 top-[70rem] h-40 w-40 bg-[#0ce6a5] opacity-50 [filter:blur(8rem)]" />
        <span className="absolute right-0 top-[70rem] h-40 w-40 bg-[#87bd0a] opacity-50 [filter:blur(8rem)]" />
        <ReactParallaxTilt className="h-80 w-full lg:h-full lg:w-1/4">
          <img src="/rafi-abiyyu-airlangga.jpg?url" alt="Rafi Abiyyu Airlangga" className="h-full w-full rounded-xl object-cover transition-all duration-300 ease-in-out [box-shadow:_0.3rem_0.3rem_0_#bcbcbc]" loading="lazy" />
        </ReactParallaxTilt>
        <section className="mt-10 flex h-full w-full flex-col lg:ml-10 lg:mt-0 lg:w-3/4">
          <h3 className="text-3xl">Rafi Abiyyu Airlangga</h3>
          <h5 className="mt-2 text-[#006400]/80">Developer of Gesar</h5>
          <h5 className="mt-2">
            Mahasiswa Politeknik Negeri Malang angkatan 2023. Mendirikan Gesar
            pada tahun 2024 sebagai platform untuk konsultasi dan edukasi
            kesehatan mental. Berkomitmen untuk menyediakan layanan yang mudah
            diakses dan membantu masyarakat lebih peduli terhadap kesejahteraan
            mental.
          </h5>
          <br />
          <div className="flex">
            <Link to="https://www.linkedin.com/in/rafiabiyyuairlangga" className="flex h-fit w-fit" target="_blank">
              <img src="/linkedin.png?url" alt="LinkedIn" className="h-7 w-7" loading="lazy" />
            </Link>
            <Link to="https://www.github.com/a6iyyu" className="ml-4 flex h-fit w-fit" target="_blank">
              <img src="/github.png?url" alt="GitHub" className="h-7 w-7" loading="lazy" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};