import { useState } from "react";
import { Link } from "react-router-dom";
import { WebsiteMeta } from "@/common/website-meta";
import { Notification } from "@/common/notification";
import { MenanganiPengiriman } from "@/utils/menangani-pengiriman";
import { MenanganiPerubahanFormulir } from "@/utils/menangani-perubahan-formulir";
import { LoginSkema } from "@/utils/skema";

export const LupaKataSandi = () => {
	const [errorForm, setErrorForm] = useState({});
	const [forgotPasswordData, setForgotPasswordData] = useState({ username_or_email: "" });
	const [showNotification, setShowNotification] = useState({ showMessage: "", isVisible: false });

	const HandleSubmit = e => MenanganiPengiriman(e, LoginSkema, forgotPasswordData, setErrorForm, "auth/lupa-kata-sandi", "reset-kata-sandi", setShowNotification);
	const HandleChange = e => MenanganiPerubahanFormulir(e, setForgotPasswordData, forgotPasswordData);

  return (
    <>
      <WebsiteMeta title="Lupa Kata Sandi?" description="Jangan khawatir, kami akan membantu Anda mengatur ulang kata sandi dan mengakses kembali program kami." />
      <main className="grid h-[50rem] max-h-[300vh] w-full grid-cols-1 overflow-x-hidden lg:max-h-[200vh] lg:grid-cols-2">
				{showNotification.isVisible && <Notification title={showNotification.showMessage} onclose={() => setShowNotification({ ...showNotification, isVisible: false })} />}
				<span className="absolute left-0 top-0 h-40 w-40 bg-[#1fddff] opacity-80 [filter:blur(8rem)]" />
        <section className="flex h-full w-full flex-col items-center justify-center text-[#006400]">
          <img src="/logo.png?url" alt="Logo" className="w-32 italic" />
          <h3 className="mx-auto mt-10 h-fit w-4/5 cursor-default text-center text-3xl font-bold lg:text-4xl">
            Lupa Kata Sandi?
          </h3>
          <h5 className="mx-auto mt-3 h-fit w-4/5 cursor-default text-center text-lg font-medium">
            Jangan khawatir, kami akan memberi arahan untuk mengatur ulang kata
            sandi Anda!
          </h5>
          <form onSubmit={HandleSubmit} className="mx-auto mt-10 h-fit w-4/5">
            <div className="flex flex-col">
              <label htmlFor="username_or_email">Nama/Surel</label>
              <input
                type="text"
                name="username_or_email"
                id="username_or_email"
                placeholder="Masukkan Surel Anda"
                autoComplete="on"
                className="mt-4 border-b-2 border-[#006400]/50 bg-transparent focus:border-[#006400] focus:outline-none lg:py-3"
                onChange={HandleChange}
                value={forgotPasswordData.username_or_email}
              />
              {errorForm.username_or_email && <span className="mt-3 cursor-default text-base italic text-red-500">{errorForm.username_or_email}</span>}
            </div>
            <button type="submit" className="mx-auto mt-12 h-fit w-full rounded-lg bg-[#006400] py-4 text-base font-semibold text-slate-50 transition-all duration-300 ease-in-out md:py-5 lg:hover:bg-[#017b01]">
              Perbarui Kata Sandi
            </button>
          </form>
          <Link to="/masuk" className="mx-auto mt-10 flex h-fit w-4/5 items-center justify-center font-semibold transition-all duration-300 ease-in-out lg:hover:text-[#017b01] lg:hover:underline">
            <i className="fa-solid fa-arrow-left" />
            <h4>&emsp;Kembali Ke Halaman Masuk</h4>
          </Link>
        </section>
        <section className="hidden h-full w-full cursor-default flex-col items-end justify-center bg-[url('/lupa-kata-sandi.jpg?url')] bg-cover bg-center bg-no-repeat lg:flex" />
      </main>
    </>
  );
};