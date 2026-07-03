import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

import styles from "./Navbar.module.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {

    if(menuOpen){

        document.body.style.overflow="hidden";

    }else{

        document.body.style.overflow="auto";

    }

},[menuOpen]);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Invitaciones", path: "/invitaciones" },
    { name: "Tarjetas", path: "/tarjetas" },
    { name: "Fechas Especiales", path: "/fechas-especiales" },
    { name: "Precios", path: "/precios" },
    { name: "Contacto", path: "/contacto" }
  ];

  useEffect(() => {
  return () => {
    document.body.style.overflow = "auto";
  };
}, []);

  return (
    <header className={styles.header}>

        {menuOpen && (
    <div
      className={styles.overlay}
      onClick={() => setMenuOpen(false)}
    />
  )}

      <div className="container">

        <nav className={styles.navbar}>

          {/* ========= LOGO ========= */}

          <NavLink
            to="/"
            className={styles.logo}
          >

            <div className={styles.logoCircle}>
              NC
            </div>

            <div className={styles.logoText}>

              <h2>NC Digital</h2>

              <span>Moments</span>

            </div>

          </NavLink>

          {/* ========= MENU ========= */}

          <ul
            className={`${styles.menu} ${
              menuOpen ? styles.active : ""
            }`}
          >

            {menuItems.map((item) => (

              <li key={item.name}>

                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.link} ${styles.activeLink}`
                      : styles.link
                  }
                >

                  {item.name}

                </NavLink>

              </li>

            ))}

          </ul>

          {/* ========= WHATSAPP ========= */}

          <a
            href="https://wa.me/573222039361"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
          >

            <FaWhatsapp />

            <span>WhatsApp</span>

          </a>

          {/* ========= MENU MOVIL ========= */}

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </nav>

      </div>

    </header>
  );

}

export default Navbar;