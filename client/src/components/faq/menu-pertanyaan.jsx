import { useState } from "react";

export const MenuPertanyaan = ({ setFilteredAnswer }) => {
	const [mainOptions, setMainOptions] = useState("Semua");
	const Menus = ["Semua", "Umum", "Akun", "Memulai", "Komunitas", "Konsultasi", "Survei"];
	const HandleMenuFilter = menu => (setMainOptions(menu), setFilteredAnswer(menu));

	return (
		<section className="flex h-fit w-full max-w-full flex-row items-center overflow-y-auto pb-10 pt-10 lg:w-1/4 lg:flex-col lg:items-start lg:pt-0">
      <span className="absolute left-0 top-[75rem] z-0 h-40 w-40 bg-[#f6790b] opacity-75 [filter:blur(8rem)]" />
      {Menus.map((menu, index) =>
        <h4 key={index} className="group mr-6 h-fit w-fit cursor-pointer text-lg font-semibold transition-all duration-300 ease-in-out first:mt-0 last:mr-0 lg:mr-0 lg:mt-7 lg:hover:text-slate-300" onClick={() => HandleMenuFilter(menu)}>
          <span className={`rounded-md transition-all duration-300 ease-in-out ${mainOptions === menu ? "bg-[#006400] px-6 py-3 text-slate-50" : "bg-transparent text-[#006400]"}`}>
            {menu}
          </span>
        </h4>
      )}
    </section>
	);
};