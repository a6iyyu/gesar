import { useEffect, useState } from "react";

export const FilterRentangWaktu = () => {
  const [open, setOpen] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState(["Terbaru", "Terlama"]);

  useEffect(() => {
    const HandleDropdown = (e) => !e.target.closest("#dropdown") && setOpen(false);
    document.addEventListener("click", HandleDropdown);
    return () => document.removeEventListener("click", HandleDropdown);
  }, [open]);

  const HandleSelect = time => {
    setSelectedTimeRange([time, ...selectedTimeRange.filter(option => option !== time)]);
    setOpen(false);
  };

  return (
    <section onClick={() => setOpen(!open)} id="dropdown" className="cursor-pointer border-b-2 border-b-slate-50">
      {selectedTimeRange[0]}&emsp;&emsp;<i className="fa-sharp-duotone fa-solid fa-angle-down" />
      {open &&
        <div className="absolute mt-2 rounded-lg bg-[#006400] text-slate-50">
          {selectedTimeRange.map((time, index) =>
            <span key={index} onClick={() => HandleSelect(time)} className="flex flex-col py-4 pl-5 pr-10 transition-all duration-300 ease-in-out first:mt-0 first:rounded-t-lg last:mb-0 last:rounded-b-lg lg:hover:bg-[#004400]">
              {time}
            </span>
          )}
        </div>
      }
    </section>
  );
};