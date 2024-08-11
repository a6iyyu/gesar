import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TidakDitemukan } from "@/pages/404.jsx";
import { Beranda } from "@/pages/beranda.jsx";
import { TentangKami } from "@/pages/tentang-kami.jsx";
import { Blog } from "@/pages/blog.jsx";
import { Konsultasi } from "@/pages/konsultasi.jsx";
import { Permainan } from "@/pages/permainan";
import { Registrasi } from "@/pages/registrasi.jsx";
import { Masuk } from "@/pages/masuk.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={TidakDitemukan} />
        <Route path="/" Component={Beranda} />
        <Route path="/tentang-kami" Component={TentangKami} />
        <Route path="/blog" Component={Blog} />
        <Route path="/konsultasi" Component={Konsultasi} />
        <Route path="/permainan" Component={Permainan} />
        <Route path="/registrasi" Component={Registrasi} />
        <Route path="/masuk" Component={Masuk} />
      </Routes>
    </BrowserRouter>
  );
};