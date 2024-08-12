import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HamburgerAnimated = styled.div`
  & {
    animation: fade-down 300ms ease-in-out;
  }
  @keyframes fade-down {
    from {
      transform: translateY(-1.5rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Blog", "Konsultasi", "Permainan", "Registrasi"];

  useEffect(() => {
    const HandleHamburgerMenu = (e) => {
      if (!e.target.closest(".hamburger-menu")) setOpen(false);
    };

    document.body.addEventListener("click", HandleHamburgerMenu);
    return () => document.body.removeEventListener("click", HandleHamburgerMenu);
  }, [open]);

  return (
    <section className="hamburger-menu flex h-full w-3/5 items-center justify-end lg:hidden">
      <i className="fas fa-bars cursor-pointer text-2xl text-[#006400]" onClick={() => setOpen(!open)} />
      {open &&
        <HamburgerAnimated className="absolute top-24 z-50 h-fit w-fit rounded-xl bg-[#006400]">
          {Menus.map((menu, i) =>
            <Link to={`/${menu.toLowerCase().replace(" ", "-")}`} key={i} className="grid h-full w-full cursor-pointer place-items-center px-10 py-5 font-semibold text-slate-50 transition-all duration-300 ease-in-out first:rounded-t-xl last:rounded-b-xl hover:bg-[#017b01] first:hover:rounded-t-xl last:hover:rounded-b-xl">
              {menu}
            </Link>
          )}
        </HamburgerAnimated>
      }
    </section>
  );
};