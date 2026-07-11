import styles from "./cta.module.css";

import Button from "../Button/Button";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

import ilustracion from "../../assets/images/idea.png";

function CTA() {

  return (

    <section className={styles.section}>

      <div className="container">

        <div className={styles.card}>

          {/* Contenido */}

          <div className={styles.content}>

            <div className={styles.badge}>
              ✨ Hagamos realidad tu idea
            </div>

            <h2 className={styles.title}>
              ¿Tienes una idea?
              <span> Hagámosla realidad juntos.</span>
            </h2>

            <p className={styles.description}>

              Creamos experiencias digitales para personas,
              emprendedores y pequeños negocios.

              Desde una invitación personalizada hasta una
              landing page, un portafolio o una solución
              digital diseñada especialmente para ti.

            </p>

            <div className={styles.buttons}>

              <Button
  to="/invitaciones"
>
  invitaciones
</Button>

              <WhatsAppButton
                text="Hablemos"
              />

            </div>

          </div>

          {/* Ilustración */}

          <div className={styles.image}>

            <img
              src={ilustracion}
              alt="NC Digital Moments"
            />

          </div>

        </div>

      </div>

    </section>

  );

}

export default CTA;