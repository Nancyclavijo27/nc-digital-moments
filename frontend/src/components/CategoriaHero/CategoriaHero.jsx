import styles from "./CategoriaHero.module.css";

import Button from "../Button/Button";

function CategoriaHero({

  badge,

  title,

  description,

  image,

  buttonText,

  buttonLink,

}) {

  return (

    <section className={styles.hero}>

      <div className="container">

        <div className={styles.content}>

          <div className={styles.info}>

            <div className={styles.badge}>
              {badge}
            </div>

            <h1 className={styles.title}>
              {title}
            </h1>

            <p className={styles.description}>
              {description}
            </p>

            <Button

              href={buttonLink}

              variant="primary"

            >
              {buttonText}
            </Button>

          </div>

          <div className={styles.imageContainer}>

            <img

              src={image}

              alt={title}

              className={styles.image}

            />

          </div>

        </div>

      </div>

    </section>

  );

}

export default CategoriaHero;