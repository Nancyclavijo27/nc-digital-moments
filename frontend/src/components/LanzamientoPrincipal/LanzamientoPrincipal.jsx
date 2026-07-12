import styles from "./LanzamientoPrincipal.module.css";
import Button from "../Button/Button";

import amorImg from "../../assets/images/amor.png";

import {
  FaHeart,
  FaGift,
  FaStar,
  FaGraduationCap,
  FaBirthdayCake,
} from "react-icons/fa";

import { GiPumpkinLantern } from "react-icons/gi";
import { PiTreeEvergreenFill } from "react-icons/pi";


function LanzamientoPrincipal() {

  const temporadas = [
    {
      icon: <GiPumpkinLantern />,
      nombre: "Halloween",
    },
    {
      icon: <PiTreeEvergreenFill />,
      nombre: "Navidad",
    },
    {
      icon: <FaHeart />,
      nombre: "San Valentín",
    },
    {
      icon: <FaGift />,
      nombre: "Día de la Madre",
    },
    {
      icon: <FaGraduationCap />,
      nombre: "Graduaciones",
    },
    {
      icon: <FaBirthdayCake />,
      nombre: "Cumpleaños",
    },
  ];


  return (
    <article className={styles.card}>

      {/* Parte superior: información + imagen */}
      <div className={styles.top}>

        <div className={styles.info}>

          
          <h3 className={styles.title}>
            Amor y Amistad
          </h3>


          <p className={styles.description}>
            Celebra los lazos que importan con tarjetas digitales,
            detalles personalizados y diseños creados para sorprender
            a quienes más quieres.
          </p>


          <div className={styles.tags}>

  <div className={styles.tag}>
    <div className={styles.tagIcon}>
      <FaHeart />
    </div>
    <span>
      Tarjetas digitales
    </span>
  </div>


  <div className={styles.tag}>
    <div className={styles.tagIcon}>
      <FaGift />
    </div>
    <span>
      Detalles personalizados
    </span>
  </div>


  <div className={styles.tag}>
    <div className={styles.tagIcon}>
      <FaStar />
    </div>
    <span>
      Diseños únicos
    </span>
  </div>

</div>


          <Button
            href="/amor-y-amistad"
            variant="primary"
          >
            Ver colección
          </Button>


        </div>


        {/* Imagen al lado derecho */}
        <div className={styles.image}>

          <img
            src={amorImg}
            alt="Amor y Amistad"
          />

        </div>


      </div>


      {/* Temporadas abajo ocupando todo el ancho */}
      <div className={styles.temporadas}>

        {temporadas.map((item, index) => (

          <div
            key={index}
            className={styles.temporada}
          >

            <div className={styles.icon}>
              {item.icon}
            </div>


            <span>
              {item.nombre}
            </span>


          </div>

        ))}

      </div>


    </article>
  );
}


export default LanzamientoPrincipal;