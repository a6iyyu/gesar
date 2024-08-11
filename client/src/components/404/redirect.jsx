import { Link } from "react-router-dom";

export const Redirect = () => {
  return (
    <main className="mx-auto mb-60 mt-40 flex w-4/5 flex-col items-center justify-between text-gray-50 lg:flex-row">
      <img src="/404.png?url" alt="404: Not Found!" className="font-semibold transition-all duration-300 ease-in-out lg:hover:scale-105" loading="lazy" />
      <section className="mt-8 flex h-full w-full cursor-default flex-col items-center justify-center text-gray-50 lg:mt-0 lg:w-1/2 lg:items-start">
        <p className="h-fit w-fit text-4xl font-bold lg:text-5xl">Oops!</p>
        <p className="mt-2 h-fit w-fit text-3xl font-medium lg:text-4xl">
          Tidak ada yang menarik di sini.
        </p>
        <br />
        <p className="text-justify text-lg font-normal lg:text-2xl">
          Sepertinya halaman ini mengambil sapuan kuas ke arah yang salah. Mari
          kita menavigasi kembali ke pameran utama bersama-sama.
        </p>
        <br />
        <br />
        <Link to="/" className="flex h-fit w-fit cursor-pointer items-center justify-between rounded-full bg-gray-200 py-2 pl-3 pr-8 transition-all duration-300 ease-in-out hover:bg-gray-300">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gray-950 text-xl text-gray-50 transition-all duration-300 ease-in-out [transform:rotate(225deg)] hover:bg-gray-800 hover:text-gray-200">
            &#10132;
          </div>
          <h5 className="ml-4 text-lg font-bold text-gray-950">Drift Home</h5>
        </Link>
      </section>
    </main>
  );
};