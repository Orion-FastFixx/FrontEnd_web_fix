import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const AdminEdukasi = React.lazy(() => import("pages/AdminEdukasi"));
const AdminMontir = React.lazy(() => import("pages/AdminMontir"));
const Adminbengkel = React.lazy(() => import("pages/Adminbengkel"));
const Setupakun = React.lazy(() => import("pages/Setupakun"));
const MontirPesanan = React.lazy(() => import("pages/MontirPesanan"));
const Montirprofil = React.lazy(() => import("pages/Montirprofil"));
const TentangKami = React.lazy(() => import("pages/TentangKami"));
const Daftar = React.lazy(() => import("pages/Daftar"));
const BengkelPesanan = React.lazy(() => import("pages/BengkelPesanan"));
const BengkelLayanan = React.lazy(() => import("pages/BengkelLayanan"));
const BengkelMontir = React.lazy(() => import("pages/BengkelMontir"));
const BengkelProfile = React.lazy(() => import("pages/BengkelProfile"));
const Masuk = React.lazy(() => import("pages/Masuk"));
const MasukMontir = React.lazy(() => import("pages/MasukMontir"));
const MasukBengkel = React.lazy(() => import("pages/MasukBengkel"));
const Kontak = React.lazy(() => import("pages/Kontak"));
const Beranda = React.lazy(() => import("pages/Beranda"));
const Role = React.lazy(() => import("pages/PilihRole"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Sabar Yaa kaka......</>}>
      <Router>
        <Routes>
          <Route path="/role" element={<Role />} />
          <Route path="/" element={<Beranda />} />
          <Route path="/masukMontir" element={<MasukMontir />} />
          <Route path="/masukBengkel" element={<MasukBengkel />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/bengkelprofile" element={<BengkelProfile />} />
          <Route path="/bengkelmontir" element={<BengkelMontir />} />
          <Route path="/bengkellayanan" element={<BengkelLayanan />} />
          <Route path="/bengkelpesanan" element={<BengkelPesanan />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/montirprofil" element={<Montirprofil />} />
          <Route path="/montirpesanan" element={<MontirPesanan />} />
          <Route path="/setupakun" element={<Setupakun />} />
          <Route path="/adminbengkel" element={<Adminbengkel />} />
          <Route path="/adminmontir" element={<AdminMontir />} />
          <Route path="/adminedukasi" element={<AdminEdukasi />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
