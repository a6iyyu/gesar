import { useEffect, useState } from "react";

export const FilterJumlahAnggota = () => {
  const [open, setOpen] = useState(false);
  const [selectedMemberRange, setSelectedMemberRange] = useState(["< 10 Anggota", "10 - 50 Anggota", "> 50 Anggota"]);

  useEffect(() => {
    const HandleDropdown = (e) => !e.target.closest("#dropdown") && setOpen(false);
    document.addEventListener("click", HandleDropdown);
    return () => document.removeEventListener("click", HandleDropdown);
  }, [open]);

  const HandleSelect = member => {
    setSelectedMemberRange([member, ...selectedMemberRange.filter(option => option !== member)]);
    setOpen(false);
  };

  return (
    <section onClick={() => setOpen(!open)} id="dropdown" className="ml-8 cursor-pointer border-b-2 border-b-slate-50">
      {selectedMemberRange[0]}&emsp;&emsp;<i className="fa-sharp-duotone fa-solid fa-angle-down" />
      {open &&
        <div className="absolute mt-2 rounded-lg bg-[#006400] text-slate-50">
          {selectedMemberRange.map((anggota, index) =>
            <span key={index} onClick={() => HandleSelect(anggota)} className="flex flex-col py-4 pl-5 pr-10 transition-all duration-300 ease-in-out first:mt-0 first:rounded-t-lg last:mb-0 last:rounded-b-lg lg:hover:bg-[#004400]">
              {anggota}
            </span>
          )}
        </div>
      }
    </section>
  );
};