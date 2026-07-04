import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

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
  { name: "Servicios", path: "/servicios" },
  { name: "Precios", path: "/precios" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
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

          <WhatsAppButton className={styles.whatsapp} />

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