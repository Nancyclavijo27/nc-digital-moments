import styles from "./Precios.module.css";

import prices from "../../data/prices";

function Precios() {
  return (
    <section className={styles.prices}>

      <div className="container">

        <div className={styles.header}>

          <span className={styles.badge}>
            ✨ Planes
          </span>

          <h1>
            Encuentra la opción ideal para tu celebración
          </h1>

          <p>
            Todas nuestras invitaciones son personalizadas.
            Elige el plan que mejor se adapte a tu evento.
          </p>

        </div>

        <div className={styles.grid}>

          {prices.map((plan) => (

            <div
              key={plan.id}
              className={styles.card}
            >

              <h2>{plan.title}</h2>

              <h3>{plan.price}</h3>

              <p>{plan.description}</p>

              <ul>

                {plan.features.map((feature, index) => (

                  <li key={index}>
                    ✓ {feature}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        <div className={styles.note}>

          <p>

            Cada proyecto es único.

            El precio final puede variar según el nivel de
            personalización, la cantidad de contenido y las
            funcionalidades que desees incluir.

          </p>

        </div>

      </div>

    </section>
  );
}

export default Precios;