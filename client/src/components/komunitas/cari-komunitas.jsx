import { OpsiPencarian } from "./opsi-pencarian";
import { OpsiFilter } from "./opsi-filter";
import { DaftarKomunitas } from "./daftar-komunitas";

export const CariKomunitas = () => {
  return (
    <main className="h-fit w-full bg-gradient-to-tl from-[#c1a88a] to-[#d2ac7e] py-32">
      <section className="mx-auto flex w-4/5 flex-col">
        <OpsiPencarian />
        <OpsiFilter />
        <DaftarKomunitas />
      </section>
    </main>
  );
};  