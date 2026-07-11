import styles from "./Nosotros.module.css";

import {
  FaHeart,
  FaLightbulb,
  FaRocket
} from "react-icons/fa";

function Nosotros() {
  return (
    <section className={styles.about}>

      <div className="container">

        <div className={styles.card}>

          <span className={styles.badge}>
            ✨ Conoce NC Digital Moments
          </span>

          <h1 className={styles.title}>
            Creamos soluciones digitales con creatividad y propósito.
          </h1>

          <p className={styles.description}>
            NC Digital Moments nace con el propósito de transformar ideas en
            experiencias digitales modernas, elegantes y personalizadas.
            Nuestro objetivo es ayudar a personas, emprendedores y pequeños
            negocios a destacar en internet con soluciones diseñadas a su medida.
          </p>

          <div className={styles.values}>

            <div className={styles.value}>
              <FaHeart />
              <h3>Pasión</h3>
              <p>Creamos cada proyecto con dedicación y atención al detalle.</p>
            </div>

            <div className={styles.value}>
              <FaLightbulb />
              <h3>Creatividad</h3>
              <p>Diseños modernos pensados para sorprender y conectar.</p>
            </div>

            <div className={styles.value}>
              <FaRocket />
              <h3>Innovación</h3>
              <p>Combinamos diseño y tecnología para ofrecer soluciones digitales.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Nosotros;