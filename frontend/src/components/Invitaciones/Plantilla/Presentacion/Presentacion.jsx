import styles from "./Presentacion.module.css";

function Presentacion({ presentacion }) {

  const continuar = () => {

    document
      .getElementById("bienvenida")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };

  return (

    <section
      className={styles.section}
      id="presentacion"
    >

      <div className={styles.paper}>

        <span className={styles.subtitle}>

          Una invitación especial

        </span>

        <h2>

          {presentacion.titulo}

        </h2>

        <p>

          {presentacion.mensaje}

        </p>

        <div className={styles.signature}>

          {presentacion.firma}

        </div>

        <button

          onClick={continuar}

          className={styles.button}

        >

          {presentacion.boton}

        </button>

      </div>

    </section>

  );

}

export default Presentacion;