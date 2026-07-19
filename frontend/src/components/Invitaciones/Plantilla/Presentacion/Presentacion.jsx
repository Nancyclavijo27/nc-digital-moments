import { useState } from "react";
import styles from "./Presentacion.module.css";

function Presentacion({ presentacion }) {

  const [abierto, setAbierto] = useState(false);

  const continuar = () => {

    setAbierto(false);

    setTimeout(() => {

      document
        .getElementById(presentacion.scroll)
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 500);

  };

  return (

    <section
      className={styles.section}
      id="presentacion"
    >

      {/* Fondo oscuro */}

      <div
        className={`${styles.overlay} ${
          abierto ? styles.overlayVisible : ""
        }`}
      />

      {/* ======================
            SOBRE
      ====================== */}

      {!abierto && (

        <div
          className={styles.envelope}
          onClick={() => setAbierto(true)}
        >

          <img
            src={presentacion.imagenes.sobre}
            alt="Sobre"
            className={styles.sobre}
          />

          <img
            src={presentacion.imagenes.argollas}
            alt=""
            className={styles.argollas}
          />

          <button className={styles.openButton}>

            {presentacion.botonAbrir}

          </button>

        </div>

      )}

      {/* ======================
            CARTA
      ====================== */}

      <div
        className={`${styles.paperContainer} ${
          abierto ? styles.paperVisible : ""
        }`}
      >

        <img
          src={presentacion.imagenes.papel}
          alt=""
          className={styles.paper}
        />

        <div className={styles.content}>

          <img
            src={presentacion.imagenes.floresSuperiores}
            alt=""
            className={styles.topFlowers}
          />

          <span className={styles.subtitle}>

            Nuestra Invitación

          </span>

          <h2>

            {presentacion.titulo}

          </h2>

          <img
            src={presentacion.imagenes.separador}
            alt=""
            className={styles.separator}
          />

          <p>

            {presentacion.mensaje}

          </p>

          <div className={styles.signature}>

            {presentacion.firma}

          </div>

          <button
            className={styles.button}
            onClick={continuar}
          >

            {presentacion.botonContinuar}

          </button>

          <img
            src={presentacion.imagenes.pieFloral}
            alt=""
            className={styles.bottomFlowers}
          />

        </div>

      </div>

    </section>

  );

}

export default Presentacion;