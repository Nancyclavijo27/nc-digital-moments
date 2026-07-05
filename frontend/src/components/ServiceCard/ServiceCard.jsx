import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

function ServiceCard({
  image,
  title,
  description,
  status,
  link,
  disabled = false,
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

        <h3>{title}</h3>

        <p>{description}</p>

        <span
          className={`${styles.status} ${
            disabled ? styles.development : styles.available
          }`}
        >
          {status}
        </span>

        {disabled ? (
          <span className={styles.disabledLink}>
            Próximamente
          </span>
        ) : (
          <Link
            to={link}
            className={styles.link}
          >
            Ver más →
          </Link>
        )}

      </div>

    </article>
  );
}

export default ServiceCard;