import styles from "./TarjetaInvitacion.module.css";

import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

function TarjetaInvitacion({

  image,

  title,

  category,

  description,

  link,

}) {

  return (

    <article className={styles.card}>

      <div className={styles.imageContainer}>

        <img

          src={image}

          alt={title}

          className={styles.image}

        />

      </div>

      <div className={styles.content}>

        <span className={styles.category}>

          {category}

        </span>

        <h3 className={styles.title}>

          {title}

        </h3>

        <p className={styles.description}>

          {description}

        </p>

        <Link

          to={link}

          className={styles.button}

        >

          Ver detalles

          <FaArrowRight />

        </Link>

      </div>

    </article>

  );

}

export default TarjetaInvitacion;