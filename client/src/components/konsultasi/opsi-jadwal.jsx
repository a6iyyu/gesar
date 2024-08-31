export const OpsiJadwal = () => {
  return (
    <section className="flex overflow-y-scroll whitespace-nowrap py-4 pr-4">
      {["Pagi", "Siang", "Malam"].map((jadwal, index) =>
        <h4 key={index} className="mr-6 cursor-pointer rounded-md bg-[#006400] px-7 py-3 text-lg font-semibold text-slate-50 transition-all duration-300 ease-in-out [box-shadow:_0.3rem_0.3rem_0_#017b01] last:mr-0 lg:hover:bg-[#008000]">
          {jadwal}
        </h4>
      )}
    </section>
  );
};