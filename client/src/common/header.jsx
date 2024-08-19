import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { HamburgerMenu } from "./hamburger-menu";

const MenuHover = styled.section`
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
  const Menus = ["Blog", "Komunitas", "Konsultasi", "Survei", "Registrasi"];

  return (
    <header className="mx-auto flex h-24 w-4/5 items-center text-[#006400] xl:h-36">
      <section className="flex h-full w-2/5 items-center">
        <Link to="/" className="h-fit w-48">
          <img src="/logo.png?url" alt="Logo" className="font-semibold" />
        </Link>
      </section>
      <MenuHover className="hidden h-full w-3/5 text-lg font-semibold xl:flex xl:items-center xl:justify-end">
        {Menus.map((menu, i) =>
          <Link to={`/${menu.toLowerCase().replace(/ /g, "-")}`} key={i} className="mr-14 transition-all duration-300 ease-in-out last:mr-0 last:rounded-lg last:bg-[#006400] last:px-6 last:py-3 last:text-slate-50 hover:text-[#017b01] hover:underline last:hover:bg-[#017b01] last:hover:text-slate-50 last:hover:no-underline">
            {menu}
          </Link>
        )}
      </MenuHover>
      <HamburgerMenu />
    </header>
  );
};