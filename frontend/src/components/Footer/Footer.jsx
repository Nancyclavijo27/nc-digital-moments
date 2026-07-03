import styles from "./Footer.module.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className="container">

        <div className={styles.grid}>

          {/* Marca */}

          <div>

            <div className={styles.logo}>

              <div className={styles.logoIcon}>
                NC
              </div>

              <div>

                <h2>NC Digital</h2>

                <span>Moments</span>

              </div>

            </div>

            <p className={styles.description}>
              Invitaciones y tarjetas digitales personalizadas para hacer
              inolvidables tus momentos más especiales.
            </p>

          </div>

          {/* Navegación */}

          <div>

            <h3>Explora</h3>

            <ul>

              <li>Inicio</li>

              <li>Invitaciones</li>

              <li>Tarjetas</li>

              <li>Fechas Especiales</li>

              <li>Precios</li>

              <li>Contacto</li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3>Contacto</h3>

            <ul>

              <li>
                <FaWhatsapp />
                WhatsApp
              </li>

              <li>
                <FaEnvelope />
                clavijovarela@gmail.com
              </li>

              <li>Bogotá • Colombia</li>

            </ul>

          </div>

          {/* Redes */}

          <div>

            <h3>Sígueme</h3>

            <div className={styles.social}>

              <a href="/">
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.bottom}>

        <p>
          © 2026 NC Digital Moments · Hecho con{" "}
          <FaHeart className={styles.heart} /> en Colombia.
        </p>

      </div>

    </footer>
  );
}

export default Footer;