import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TidakDitemukan } from "@/pages/404.jsx";
import { Beranda } from "@/pages/beranda.jsx";
import { Blog } from "@/pages/blog.jsx";
import { DetailKaroselBlog } from "@/pages/detail-karosel-blog";
import { FAQ } from "@/pages/faq";
import { Komunitas } from "@/pages/komunitas";
import { Konsultasi } from "@/pages/konsultasi.jsx";
import { KritikDanSaran } from "@/pages/kritik-dan-saran";
import { Survei } from "@/pages/survei";
import { TentangKami } from "@/pages/tentang-kami.jsx";
import { Registrasi } from "@/pages/registrasi.jsx";
import { Masuk } from "@/pages/masuk.jsx";
import { LupaKataSandi } from "@/pages/lupa-kata-sandi";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={TidakDitemukan} />
        <Route path="/" Component={Beranda} />
        <Route path="/blog" Component={Blog} />
        <Route path="/blog/:slug" Component={DetailKaroselBlog} />
        <Route path="/faq" Component={FAQ} />
        <Route path="/komunitas" Component={Komunitas} />
        <Route path="/konsultasi" Component={Konsultasi} />
        <Route path="/kritik-dan-saran" Component={KritikDanSaran} />
        <Route path="/survei" Component={Survei} />
        <Route path="/tentang-kami" Component={TentangKami} />
        <Route path="/registrasi" Component={Registrasi} />
        <Route path="/masuk" Component={Masuk} />
        <Route path="/lupa-kata-sandi" Component={LupaKataSandi} />
      </Routes>
    </BrowserRouter>
  );
};