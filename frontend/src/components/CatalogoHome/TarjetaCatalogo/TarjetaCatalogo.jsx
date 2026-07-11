import styles from "./TarjetaCatalogo.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function TarjetaCatalogo({
  image,
  title,
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

        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.description}>
          {description}
        </p>

        <Link
          to={link}
          className={styles.link}
        >

          Ver diseños

          <FaArrowRight />

        </Link>

      </div>

    </article>

  );

}

export default TarjetaCatalogo;