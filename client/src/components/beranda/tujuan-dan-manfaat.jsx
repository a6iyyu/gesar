import { PropsTujuanDanManfaat } from "@/data/props-tujuan-dan-manfaat";

export const TujuanDanManfaat = () => {
  return (
    <main className="flex h-fit w-full bg-[#c1a88a] pb-40 pt-20 text-[#006400]">
      <section className="mx-auto flex h-full w-4/5">
        {PropsTujuanDanManfaat.map(data =>
          <div key={data.id}></div>  
        )}
      </section>
    </main>
  );
};