export const OpsiPencarian = () => {
  return (
    <form action="" className="flex items-center text-[#006400]">
      <label htmlFor="search" className="hidden" />
      <input type="search" name="search" id="search" placeholder="Temukan komunitas disini . . ." className="flex-1 rounded-l-lg px-5 py-5 text-sm focus:outline-none md:px-6 md:text-xl" />
      <button className="rounded-r-lg bg-[#006400] px-6 py-[1.15rem] text-slate-50 md:py-5">
        <i className="fas fa-search text-sm md:text-xl" />
      </button>
    </form>
  );
};