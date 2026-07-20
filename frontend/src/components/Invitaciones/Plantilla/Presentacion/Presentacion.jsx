import { useState } from "react";
import styles from "./Presentacion.module.css";

function Presentacion({ presentacion }) {

  const [abierto, setAbierto] = useState(false);

  const abrirInvitacion = () => {

    setAbierto(true);

  };

  const cerrarInvitacion = () => {

    setAbierto(false);

    setTimeout(() => {

      document
        .getElementById(presentacion.scroll)
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 300);

  };

  return (

    <section
      id="presentacion"
      className={styles.section}
    >

      {/* FLORES DECORATIVAS */}

      <img
        src={presentacion.imagenes.floresSuperiores}
        alt=""
        className={styles.floresSuperior}
      />

      <img
        src={presentacion.imagenes.floresInferiores}
        alt=""
        className={styles.floresInferior}
      />

      {/* RAMAS */}

      <img
        src={presentacion.imagenes.ramas}
        alt=""
        className={styles.ramas}
      />

      {/* DESTELLOS */}

      <img
        src={presentacion.imagenes.destellos}
        alt=""
        className={styles.destellos}
      />

      {/* ARGOLLAS */}

      <img
        src={presentacion.imagenes.argollas}
        alt=""
        className={styles.argollas}
      />

      {/* SOBRE */}

      <div
        className={styles.sobreContainer}
      >

        <img
          src={presentacion.imagenes.sobre}
          alt="Sobre"
          className={styles.sobre}
        />

        <img
          src={presentacion.imagenes.sello}
          alt="Sello"
          className={styles.sello}
        />

        <div className={styles.infoSobre}>

          <span>

            {presentacion.subtitulo}

          </span>

          <h2>

            {presentacion.titulo}

          </h2>

          <p>

            {presentacion.firma}

          </p>

          <button

            className={styles.button}

            onClick={abrirInvitacion}

          >

            {presentacion.boton}

          </button>

        </div>

      </div>

      {/* =========================
            MODAL
      ========================= */}

      {abierto && (

        <div className={styles.modal}>

          <div
            className={styles.overlay}
            onClick={cerrarInvitacion}
          ></div>

          <div className={styles.carta}>

            

            <img
              src={presentacion.imagenes.floresSuperiores}
              alt=""
              className={styles.modalFlorSuperior}
            />

            <img
              src={presentacion.imagenes.floresInferiores}
              alt=""
              className={styles.modalFlorInferior}
            />

            <div className={styles.contenido}>

              <span>

                {presentacion.subtitulo}

              </span>

              <h2>

                {presentacion.titulo}

              </h2>

              <img
                src={presentacion.imagenes.separador}
                alt=""
                className={styles.separador}
              />

              <p>

                {presentacion.mensaje}

              </p>

              <div className={styles.firma}>

                {presentacion.firma}

              </div>

              <button

                className={styles.button}

                onClick={cerrarInvitacion}

              >

                {presentacion.botonCerrar}

              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}

export default Presentacion;