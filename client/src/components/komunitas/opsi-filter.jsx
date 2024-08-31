import { FilterRentangWaktu } from "./filter-rentang-waktu";
import { FilterJumlahAnggota } from "./filter-jumlah-anggota";

export const OpsiFilter = () => {
  return (
    <section className="mt-6 flex h-fit w-full overflow-y-scroll whitespace-nowrap text-base text-slate-50 md:text-lg">
      <FilterRentangWaktu />
      <FilterJumlahAnggota />
    </section>
  );
};