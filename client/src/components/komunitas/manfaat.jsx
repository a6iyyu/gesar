import { PropsManfaat } from "@/data/manfaat";

export const Manfaat = () => {
  return (
    <main id="manfaat" className="w-full cursor-default flex-col bg-gradient-to-tl from-[#c1a88a] to-[#d2ac7e] pt-16 text-[#006400]">
      <section className="mx-auto grid h-fit w-4/5 grid-cols-1 place-items-stretch gap-y-7 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
        {PropsManfaat.map(manfaat =>
          <div key={manfaat.id} className="flex items-center gap-x-5">
            <img src={manfaat.gambar} alt={manfaat.judul} className="h-20" />
            <span className="flex flex-1 flex-col text-justify">
              <strong>{manfaat.judul}</strong>
              <h5>{manfaat.deskripsi}</h5>
            </span>
          </div>
        )}
      </section>
    </main>
  );
};