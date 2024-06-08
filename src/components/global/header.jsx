import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { HamburgerMenu } from "../global/hamburger-menu";

const Hover = styled.section`
  a:hover {
    filter: blur(0);
    transform: scale(1.05);
  }
  &:hover a:not(:hover) {
    transform: scale(0.95);
    filter: blur(0.1rem);
  }
`;

export const Header = () => {
  const Menus = ["About", "Blog", "Chat", "Sign Up"];

  return (
    <header className="mx-auto flex h-24 w-4/5 items-center text-slate-50 lg:h-36">
      <section className="flex h-full w-2/5 items-center">
        <a href="/" className="h-fit w-fit">
          <img src="" alt="Icon" className="font-semibold" />
        </a>
      </section>
      <Hover className="hidden h-full w-3/5 text-lg font-semibold lg:flex lg:items-center lg:justify-end">
        {Menus.map((menu, i) => (
          <Link
            to={`/${menu.toLowerCase().replace(/ /g, "-")}`}
            key={i}
            className="mr-14 transition-all duration-300 ease-in-out last:mr-0 last:rounded-lg last:bg-slate-50 last:px-6 last:py-3 last:text-slate-950 hover:text-slate-200 hover:underline last:hover:bg-slate-200 last:hover:text-slate-800 last:hover:no-underline"
          >
            {menu}
          </Link>
        ))}
      </Hover>
      <HamburgerMenu />
    </header>
  );
};