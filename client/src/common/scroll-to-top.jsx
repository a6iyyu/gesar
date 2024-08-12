import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const HandleScrollToTop = () => window.scrollY > 40 ? setShowScrollToTop(true) : setShowScrollToTop(false);
    window.addEventListener("scroll", HandleScrollToTop);
    return () => window.removeEventListener("scroll", HandleScrollToTop);
  }, [showScrollToTop]);

  return (
    <section
      className={`fixed bottom-8 right-8 z-50 grid h-20 w-20 cursor-pointer place-items-center rounded-full bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200 lg:bottom-16 lg:right-16 lg:h-24 lg:w-24 ${showScrollToTop ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
    >
      <img src="/scroll-to-top.png?url" alt="Scroll To Top" className="w-12 text-sm font-semibold text-gray-950 lg:w-16" />
    </section>
  )
};