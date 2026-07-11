import styles from "./Contacto.module.css";

import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

function Contacto() {
  return (
    <section className={styles.contact}>

      <div className="container">

        <div className={styles.card}>

          <span className={styles.badge}>
            ✨ Estamos para ayudarte
          </span>

          <h1 className={styles.title}>
            Hablemos de tu próximo proyecto.
          </h1>

          <p className={styles.description}>
            Si tienes una idea, necesitas una invitación digital,
            una landing page, un portafolio profesional o una
            solución personalizada, será un gusto ayudarte.
          </p>

          <div className={styles.info}>

            <div className={styles.item}>
              <FaWhatsapp />
              <span>Atención por WhatsApp</span>
            </div>

            <div className={styles.item}>
              <FaEnvelope />
              <span>
                clavijovarela@gmail.com
              </span>
            </div>

            <div className={styles.item}>
              <FaMapMarkerAlt />
              <span>Bogotá, Colombia</span>
            </div>

          </div>

          <div className={styles.buttons}>

            <WhatsAppButton
              text="Hablar por WhatsApp"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contacto;