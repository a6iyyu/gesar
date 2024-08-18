import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Splide from "@splidejs/splide";
import { PropsKaroselBlog } from "@/data/props-karosel-blog";
import { MemendekkanKalimat } from "@/utils/memendekkan-kalimat";

export const KaroselBlog = () => {
  const karosel = useRef(null);

  useEffect(() => {
    new Splide(karosel.current, {
      arrows: false,
      autoplay: true,
      pagination: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      perPage: 1,
      snap: true,
      type: "loop",
    }).mount();
  }, []);

  return (
    <section ref={karosel} className="splide h-full w-full overflow-x-hidden">
      <div className="splide__track h-full w-full">
        <article className="splide__list">
          {PropsKaroselBlog.slice(0, 5).map(item =>
            <Link to={`/blog/${item.judul.replace(/ /g, "-").toLowerCase()}`} key={item.id} className="splide__slide flex h-full w-full">
              <span className="mx-auto h-full w-[95%] flex-col items-center">
                <img src={item.gambar} alt={item.judul} className="h-72 w-full rounded-2xl object-cover [box-shadow:0.3rem_0.3rem_0_#bcbcbc]" loading="lazy" />
                <h2 className="group mt-4 text-justify text-xl font-bold transition-all duration-300 ease-in-out [text-align-last:center] lg:text-left lg:text-2xl lg:[text-align-last:left]">
                  <span className="lg:bg-gradient-to-r lg:from-[#006400] lg:to-[#006400] lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                    {item.judul}
                  </span>
                </h2>
                <h2 className="group mt-4 text-justify text-base font-medium transition-all duration-300 ease-in-out [text-align-last:center] lg:[text-align-last:left]">
                  <span className="lg:bg-gradient-to-r lg:from-[#006400] lg:to-[#006400] lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                    {MemendekkanKalimat(item.deskripsi, 100)}
                  </span>
                </h2>
              </span>
            </Link>  
          )}
        </article>
      </div>
    </section>
  );
};