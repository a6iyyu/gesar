import { Link } from "react-router-dom";

export const HalamanBelumSiap = () => {
  return (
    <>
      <div id="halaman-belum-siap" className="mx-auto my-10 h-0.5 w-4/5 rounded-full bg-[#006400]" />
      <span className="absolute left-0 top-[50rem] -z-10 h-40 w-40 bg-[#083710] [filter:blur(10rem)]" />
      <main className="mx-auto mb-28 flex w-4/5 flex-col items-center justify-between text-[#006400] lg:flex-row">
        <img src="/unavailable.png?url" alt="Sorry, this page isn't ready!" className="font-semibold transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
        <section className="mt-8 flex h-full w-full cursor-default flex-col items-center justify-center lg:mt-0 lg:w-1/2 lg:items-start">
          <p className="h-fit w-fit text-4xl font-bold lg:text-5xl">Oops!</p>
          <p className="mt-2 h-fit w-fit text-3xl font-medium lg:text-4xl">
            Halaman ini belum siap.
          </p>
          <br />
          <p className="text-justify text-lg font-normal lg:text-2xl">
            Kami bekerja keras untuk menyiapkan halaman ini. Terima kasih atas
            kesabaran Anda!
          </p>
          <br />
          <br />
          <Link to="/" className="flex h-fit w-fit cursor-pointer items-center justify-between rounded-full bg-[#006400] py-2 pl-3 pr-8 transition-all duration-300 ease-in-out hover:bg-[#005300]">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#017b01] text-xl text-slate-50 transition-all duration-300 ease-in-out [transform:rotate(225deg)] hover:bg-[#006700] hover:text-gray-200">
              &#10132;
            </div>
            <h5 className="ml-4 text-lg font-bold text-gray-50">Drift Home</h5>
          </Link>
        </section>
      </main>
    </>
  );
};