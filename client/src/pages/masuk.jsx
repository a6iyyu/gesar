import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Notification } from "@/common/notification";
import { MenanganiPerubahanFormulir } from "@/utils/menangani-perubahan-formulir";
import { MenanganiPengiriman } from "@/utils/menangani-pengiriman";
import { LoginSkema } from "@/utils/skema";

export const Masuk = () => {
  const centang = useRef(null);
  const kata_sandi = useRef(null);
  const [errorForm, setErrorForm] = useState({});
  const [loginData, setLoginData] = useState({ username_or_email: "", password: "" });
  const [showNotification, setShowNotification] = useState({ showMessage: "", isVisible: false });

  useEffect(() => {
    const ShowPassword = () => centang.current && kata_sandi.current && (kata_sandi.current.type = centang.current?.querySelector("input").checked ? "text" : "password");
    centang.current && centang.current.addEventListener("click", ShowPassword);
    return () => centang.current && centang.current.removeEventListener("click", ShowPassword);
  }, [loginData, showNotification.isVisible]);

  const HandleChange = e => MenanganiPerubahanFormulir(e, setLoginData, loginData);
  const HandleSubmit = e => MenanganiPengiriman(e, LoginSkema, loginData, setErrorForm, "auth/masuk", "dashboard", setShowNotification);

  return (
    <>
      <WebsiteMeta title="Masuk dan Mulai Konsultasi Bersama Ahli Kami" description="Masuk ke akun Anda untuk melanjutkan konsultasi, bergabung dengan komunitas, dan akses konten eksklusif tentang kesehatan mental. Jaga kesehatan mental Anda dengan Gesar." />
      <ScrollIndicator />
      <main className="grid h-[60rem] max-h-[300vh] w-full grid-cols-1 overflow-x-hidden text-[#006400] lg:max-h-[200vh] lg:grid-cols-2">
        {showNotification.isVisible && <Notification title={showNotification.showMessage} onclose={() => setShowNotification({ ...showNotification, isVisible: false })} />}
        <span className="absolute left-0 top-0 h-40 w-40 bg-[#ff1fa9] opacity-80 [filter:blur(8rem)]" />
        <section className="flex h-full w-full flex-col items-center justify-center">
          <img src="/logo.png?url" alt="Logo" className="w-32 italic" />
          <h3 className="mx-auto mt-10 h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
            Selamat Datang!
          </h3>
          <h5 className="mx-auto mt-3 h-fit w-4/5 cursor-default text-center text-lg font-medium">
            Siapkah Anda menjadi yang terdepan?
          </h5>
          <form onSubmit={HandleSubmit} className="mx-auto mt-10 h-fit w-4/5">
            <div className="flex flex-col">
              <label htmlFor="username_or_email" className="font-semibold">Nama/Surel</label>
              <input
                type="text"
                name="username_or_email"
                id="username_or_email"
                placeholder="Masukkan Nama atau Surel Anda"
                autoComplete="on"
                className="mt-4 border-b-2 border-[#006400]/50 bg-transparent focus:border-[#006400] focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={loginData.username_or_email}
              />
              {errorForm.username_or_email && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.username_or_email}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mt-5 font-semibold">
                Password
              </label>
              <input
                ref={kata_sandi}
                type="password"
                name="password"
                id="password"
                placeholder="Masukkan Kata Sandi"
                autoComplete="off"
                className="mt-4 border-b-2 border-[#006400]/50 bg-transparent focus:border-[#006400] focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={loginData.password}
              />
              {errorForm.password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.password}</span>}
            </div>
            <div className="mt-5 flex flex-col justify-between sm:flex-row">
              <span ref={centang} className="h-fit w-fit">
                <input type="checkbox" name="centang" id="centang" className="cursor-pointer" />
                <label htmlFor="centang" className="ml-3 cursor-pointer">
                  Tampilkan Kata Sandi
                </label>
              </span>
              <span className="mt-2 flex h-fit w-fit flex-col items-start sm:mt-0 lg:items-end">
                <Link to="/registrasi" className="transition-all duration-300 ease-in-out lg:hover:text-[#005400] lg:hover:underline">
                  Belum punya akun?
                </Link>
                <Link to="/lupa-kata-sandi" className="mt-0.5 transition-all duration-300 ease-in-out lg:hover:text-[#005400] lg:hover:underline">
                  Lupa kata sandi?
                </Link>
              </span>
            </div>
            <button type="submit" className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#006400] py-4 text-base font-semibold text-slate-50 transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#005400]">
              Masuk
            </button>
          </form>
          <span className="h-fit w-4/5">
            <Link to="https://sube-server.vercel.app/auth/google">
              <button type="submit" className="mx-auto mt-7 flex h-fit w-full items-center justify-center gap-x-3 rounded-lg bg-slate-100 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200 md:py-5">
                <img src="/google.png?url" alt="Google" className="h-5 w-5" />
                <h5>Masuk dengan Google</h5>
              </button>
            </Link>
          </span>
        </section>
        <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-[url('/masuk.jpg?url')] bg-cover bg-center bg-no-repeat lg:flex" />
      </main>
    </>
  );
};