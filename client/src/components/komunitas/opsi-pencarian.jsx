export const OpsiPencarian = () => {
  return (
    <form action="" className="flex items-center gap-x-10 text-[#006400]">
      <label htmlFor="search" className="hidden" />
      <input type="search" name="search" id="search" placeholder="Temukan komunitas disini . . ." className="flex-1 rounded-lg px-6 py-5 focus:outline-none" />
      <button className="rounded-lg bg-[#006400] px-6 py-5 text-slate-50">
        <i className="fas fa-search" />
      </button>
    </form>
  );
};