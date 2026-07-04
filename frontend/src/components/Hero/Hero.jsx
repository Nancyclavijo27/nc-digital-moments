import styles from "./Hero.module.css";

import Button from "../Button/Button";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

import heroImage from "../../assets/images/hero.png";

import {
  FaHeart,
  FaLaptopCode,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

function Hero() {
  return (
    <section className={styles.hero}>

      <div className="container">

        <div className={styles.content}>

          {/* TEXTO */}

          <div className={styles.left}>

            <div className={styles.badge}>
              ✨ Soluciones digitales hechas con amor
            </div>

            <h1>
  Soluciones digitales
  <span>para celebrar, emprender y crecer.</span>
</h1>
            

            <p>
              Creamos invitaciones digitales, landing pages,
              portafolios profesionales, tarjetas digitales y
              soluciones para pequeños negocios que quieren
              destacar en internet con un diseño moderno,
              elegante y personalizado.
            </p>

            <div className={styles.buttons}>

              <Button>
                Ver catálogo
              </Button>

              <WhatsAppButton />

            </div>

            <div className={styles.features}>

              <div className={styles.feature}>

                <FaHeart />

                <span>Diseños personalizados</span>

              </div>

              <div className={styles.feature}>

                <FaPalette />

                <span>100% a tu estilo</span>

              </div>

              <div className={styles.feature}>

                <FaLaptopCode />

                <span>Soluciones digitales</span>

              </div>

              <div className={styles.feature}>

                <FaRocket />

                <span>Entrega rápida</span>

              </div>

            </div>

          </div>

          {/* IMAGEN */}

          <div className={styles.right}>

            <img
              src={heroImage}
              alt="NC Digital Moments"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;