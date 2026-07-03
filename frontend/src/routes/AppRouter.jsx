import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import Invitaciones from "../pages/Invitaciones/Invitaciones";
import Tarjetas from "../pages/Tarjetas/Tarjetas";
import FechasEspeciales from "../pages/FechasEspeciales/FechasEspeciales";
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
          path="/tarjetas"
          element={
            <Layout>
              <Tarjetas />
            </Layout>
          }
        />

        <Route
          path="/fechas-especiales"
          element={
            <Layout>
              <FechasEspeciales />
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