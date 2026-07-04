import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import Invitaciones from "../pages/Invitaciones/Invitaciones";
import Nosotros from "../pages/Nosotros/Nosotros";
import Servicios from "../pages/Servicios/Servicios";
import Precios from "../pages/Precios/Precios";
import Contacto from "../pages/Contacto/Contacto";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/invitaciones"
          element={
            <Layout>
              <Invitaciones />
            </Layout>
          }
        />

        <Route
          path="/servicios"
          element={
            <Layout>
              <Servicios />
            </Layout>
          }
        />

        <Route
          path="/precios"
          element={
            <Layout>
              <Precios />
            </Layout>
          }
        />

        <Route
          path="/nosotros"
          element={
            <Layout>
              <Nosotros />
            </Layout>
          }
        />

        <Route
          path="/contacto"
          element={
            <Layout>
              <Contacto />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;