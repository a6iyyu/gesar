import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Notification } from "@/common/notification";
import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { MenanganiPengiriman } from "@/utils/menangani-pengiriman";
import { MenanganiPerubahanFormulir } from "@/utils/menangani-perubahan-formulir";
import { RegisterSkema } from "@/utils/skema";
import { MenanganiXSRF } from "@/utils/menangani-xsrf";

export const Registrasi = () => {
  const centang = useRef(null);
  const kata_sandi = useRef(null);
  const konfirmasi_kata_sandi = useRef(null);
  const [errorForm, setErrorForm] = useState({});
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "", confirm_password: "" });
  const [showNotification, setShowNotification] = useState({ showMessage: "", isVisible: false });
  const [XSRFToken, setXSRFToken] = useState("");

  
  useEffect(() => {
    MenanganiXSRF("registrasi", setXSRFToken);
    const ShowPassword = () => centang.current && kata_sandi.current && konfirmasi_kata_sandi.current && (kata_sandi.current.type = konfirmasi_kata_sandi.current.type = centang.current?.querySelector("input").checked ? "text" : "password");
    centang.current && centang.current.addEventListener("click", ShowPassword);
    return () => centang.current && centang.current.removeEventListener("click", ShowPassword);
  }, [registerData, showNotification.isVisible]);
  
  const HandleChange = e => MenanganiPerubahanFormulir(e, setRegisterData, registerData);
  const HandleSubmit = e => MenanganiPengiriman(e, RegisterSkema, registerData, setErrorForm, "registrasi", "masuk", XSRFToken);

  return (
    <>
      <WebsiteMeta title="Daftarkan Dirimu Sekarang" description="" />
      <ScrollIndicator />
      <main className="grid h-[80rem] max-h-[300vh] w-full grid-cols-1 overflow-x-hidden bg-gradient-to-r from-[#ac906d] to-[#ba8c54] text-slate-200 lg:max-h-[200vh] lg:grid-cols-2">
        {showNotification.isVisible && <Notification title={showNotification.showMessage} onClose={() => setShowNotification({ ...showNotification, isVisible: false })} />}
        <span className="absolute left-0 top-0 h-40 w-40 bg-[#1fddff] opacity-80 [filter:blur(8rem)]" />
        <section className="flex h-full w-full flex-col items-center justify-center">
          <img src="/logo.png?url" alt="Logo" className="w-32 italic" />
          <h3 className="mx-auto mt-10 h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
            Buat Akun
          </h3>
          <h5 className="mx-auto mt-3 h-fit w-4/5 cursor-default text-center text-lg font-medium">
            Jadilah bagian dari generasi unggul!
          </h5>
          <form onSubmit={HandleSubmit} className="mx-auto mt-10 h-fit w-4/5">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Masukkan Nama"
                autoComplete="off"
                className="mt-4 border-b-2 border-slate-200/50 bg-transparent focus:border-slate-200 focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={registerData.username}
              />
              {errorForm.username && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.username}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mt-5 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan Surel"
                autoComplete="off"
                className="mt-4 border-b-2 border-slate-200/50 bg-transparent focus:border-slate-200 focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={registerData.email}
              />
              {errorForm.email && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.email}</span>}
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
                className="mt-4 border-b-2 border-slate-200/50 bg-transparent focus:border-slate-200 focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={registerData.password}
              />
              {errorForm.password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.password}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm_password" className="mt-5 font-semibold">
                Confirm Password
              </label>
              <input
                ref={konfirmasi_kata_sandi}
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Konfirmasi Kata Sandi"
                autoComplete="off"
                className="mt-4 border-b-2 border-slate-200/50 bg-transparent focus:border-slate-200 focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={registerData.confirm_password}
              />
              {errorForm.confirm_password && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.confirm_password}</span>}
            </div>
            <div className="mt-5 flex flex-col justify-between sm:flex-row">
              <span ref={centang} className="h-fit w-fit">
                <input type="checkbox" name="centang" id="centang" className="cursor-pointer" />
                <label htmlFor="centang" className="ml-3 cursor-pointer">
                  Tampilkan Kata Sandi
                </label>
              </span>
              <span className="mt-2 flex h-fit w-fit items-start sm:mt-0 lg:items-end">
                <Link to="/masuk" className="text-slate-100 transition-all duration-300 ease-in-out lg:hover:text-slate-200 lg:hover:underline">
                  Sudah punya akun?
                </Link>
              </span>
            </div>
            <button type="submit" className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#006400] py-4 text-base font-semibold text-slate-50 transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#005400]">
              Registrasi
            </button>
          </form>
          <span className="h-fit w-4/5">
            <Link to="https://localhost:4001/auth/google">
              <button type="submit" className="mx-auto mt-7 flex h-fit w-full items-center justify-center gap-x-3 rounded-lg bg-slate-50 py-4 text-base font-semibold text-slate-950 transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-slate-200">
                <img src="/google.png?url" alt="" className="h-5 w-5" />
                <h5>Masuk dengan Google</h5>
              </button>
            </Link>
          </span>
          <Link to="/" className="mx-auto mt-10 flex h-fit w-4/5 items-center justify-center font-semibold transition-all duration-300 ease-in-out lg:hover:underline">
            <i className="fa-solid fa-arrow-left" />
            <h4>&emsp;Kembali Ke Halaman Awal</h4>
          </Link>
        </section>
        <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-[url('/registrasi.jpg?url')] bg-cover bg-center bg-no-repeat lg:flex" />
      </main>
    </>
  );
};