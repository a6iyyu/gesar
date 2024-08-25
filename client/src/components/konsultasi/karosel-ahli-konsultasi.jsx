export const KaroselAhliKonsultasi = () => {
  return (
    <section className="flex w-full cursor-default flex-col items-center justify-center text-[#006400]">
      <img src="/unavailable.png?url" alt="Layanan Belum Tersedia!" className="transition-all duration-300 ease-in-out lg:hover:scale-105" />
      <strong className="text-center text-2xl">
        Mohon maaf, layanan ini masih belum tersedia!
      </strong>
    </section>
  );
};