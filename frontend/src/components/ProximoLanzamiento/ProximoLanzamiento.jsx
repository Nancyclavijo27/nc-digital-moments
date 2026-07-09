import styles from "./ProximoLanzamiento.module.css";

import LanzamientoPrincipal from "../LanzamientoPrincipal/LanzamientoPrincipal";

function ProximoLanzamiento() {

  return (

    <section className={styles.section}>

      <div className="container">

        <div className={styles.badge}>
          ✨ Descubre lo nuevo
        </div>

        <h1 className={styles.title}>
  Próximo lanzamiento
  
</h1>

        <LanzamientoPrincipal />

      </div>

    </section>

  );

}

export default ProximoLanzamiento;