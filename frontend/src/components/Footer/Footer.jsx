import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* ================= LOGO ================= */}

          <div>
            <NavLink to="/" className={styles.logo}>
              <div className={styles.logoIcon}>NC</div>

              <div className={styles.logoText}>
                <h2>NC Digital</h2>
                <span>Moments</span>
              </div>
            </NavLink>

            <p className={styles.description}>
              Soluciones digitales para celebrar, conectar y crecer.
            </p>

            <div className={styles.buttonContainer}>
              <WhatsAppButton text="Escríbenos" />
            </div>
          </div>

          {/* ================= NAVEGACIÓN ================= */}

          <div>
            <h3 className={styles.title}>Explora</h3>

            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink to="/">Inicio</NavLink>
              </li>

              <li className={styles.item}>
                <NavLink to="/invitaciones">Invitaciones</NavLink>
              </li>

              <li className={styles.item}>
                <NavLink to="/servicios">Servicios</NavLink>
              </li>

              <li className={styles.item}>
                <NavLink to="/precios">Precios</NavLink>
              </li>

              <li className={styles.item}>
                <NavLink to="/nosotros">Nosotros</NavLink>
              </li>

              <li className={styles.item}>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
            </ul>
          </div>

          {/* ================= CONTACTO ================= */}

          <div>
            <h3 className={styles.title}>Contacto</h3>

            <ul className={styles.list}>
              <li className={styles.item}>
                <FaEnvelope />

                <a href="mailto:clavijovarela@gmail.com">
                  clavijovarela@gmail.com
                </a>
              </li>

              <li className={styles.item}>
                <FaMapMarkerAlt />

                Bogotá, Colombia
              </li>
            </ul>
          </div>

          {/* ================= REDES ================= */}

          <div>
            <h3 className={styles.title}>Sígueme</h3>

            <div className={styles.social}>
              <a
                href="nancy lavijo"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/nancy-clavijo-varela-29353117a"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} NC Digital Moments · Hecho con{" "}
          <FaHeart className={styles.heart} /> en Colombia.
        </p>
      </div>
    </footer>
  );
}

export default Footer;