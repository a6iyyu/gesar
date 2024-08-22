import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { PropsKaroselBlog } from "@/data/karosel-blog";
import { MemendekkanKalimat } from "@/utils/memendekkan-kalimat";

export const KaroselBlog = () => {
	const karosel = useRef(null);

  useEffect(() => {
    new Splide(karosel.current, {
      arrows: false,
      pagination: false,
      type: "loop",
      snap: true,
      breakpoints: {
        3120: {
          perPage: 4,
          speed: 0.25,
        },
        1800: {
          perPage: 3,
        },
        1024: {
          perPage: 2,
          speed: 0.125,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount({ AutoScroll });
  }, []);

  return (
    <main ref={karosel} className="splide mb-24 h-fit w-full overflow-x-hidden text-[#006400] lg:mb-40">
      <section className="splide__track h-full w-full">
        <ul className="splide__list">
					{PropsKaroselBlog.slice(5, 10).map(karosel =>
            <Link to={`/blog/${karosel.judul.replace(/ /g, "-").toLowerCase()}`} key={karosel.id} className="splide__slide flex h-full w-full">
              <div className="mx-auto h-full w-[90%] flex-col items-center">
                <img src={karosel.gambar} alt={karosel.judul} className="h-72 w-full rounded-xl object-cover [box-shadow:0.3rem_0.3rem_0_#bcbcbc]" loading="lazy" />
                <h2 className="group mt-4 text-justify text-xl font-bold transition-all duration-300 ease-in-out [text-align-last:left] lg:text-2xl">
                  <span className="lg:bg-gradient-to-r lg:from-[#006400] lg:to-[#006400] lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                    {MemendekkanKalimat(karosel.judul, 75)}
                  </span>
                </h2>
                <h2 className="group mt-4 text-justify text-base font-medium transition-all duration-300 ease-in-out [text-align-last:left]">
                  <span className="lg:bg-gradient-to-r lg:from-[#006400] lg:to-[#006400] lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                    {MemendekkanKalimat(karosel.deskripsi, 100)}
                  </span>
                </h2>
              </div>
            </Link>
          )}
				</ul>
      </section>
    </main>
  );
};