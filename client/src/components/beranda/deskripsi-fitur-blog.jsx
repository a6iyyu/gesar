import { Link } from "react-router-dom";

export const DeskripsiFiturBlog = () => {
  return (
    <div className="order-1 flex flex-col justify-center text-center lg:order-none lg:text-left">
      <h3 className="hidden text-3xl font-bold lg:inline">
        Temukan Wawasan Terbaru di Blog Kami
      </h3>
      <h5 className="mt-2 hidden text-justify text-xl font-medium lg:inline">
        Eksplor panduan kami yang dirancang untuk membantu Anda mengelola
        kesehatan mental dengan lebih baik. Akses artikel-artikel kami dan mulai
        transformasi Anda sekarang.
      </h5>
      <Link to="/blog" className="mx-auto mt-6 h-fit w-fit cursor-pointer rounded-xl bg-[#006400] px-9 py-5 text-lg font-bold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:0.3rem_0.3rem_0_#014d01] hover:bg-[#017b01] lg:mx-0 xl:hover:scale-105">
        Lihat Selengkapnya
      </Link>
    </div>
  );
};