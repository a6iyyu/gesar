import React from "react";

export const HamburgerMenu = () => {
  return (
    <section className="flex h-full w-3/5 items-center justify-end lg:hidden">
      <i className="fas fa-bars cursor-pointer text-2xl text-slate-50"></i>
    </section>
  );
};