import styles from "./Servicios.module.css";

import services from "../../data/services";

function Servicios() {

  return (

    <section className={styles.services}>

      <div className="container">

        <div className={styles.header}>

          <span className={styles.badge}>
            ✨ Nuestros servicios
          </span>

          <h1>
            Soluciones digitales para celebrar, conectar y crecer.
          </h1>

          <p>
            En NC Digital Moments desarrollamos experiencias
            digitales modernas y personalizadas para personas,
            emprendedores y pequeños negocios.
          </p>

        </div>

        <div className={styles.grid}>

          {services.map((service) => (

            <div
              key={service.id}
              className={styles.card}
            >

              <div className={styles.icon}>
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <span className={styles.status}>
                {service.status}
              </span>

              <p>{service.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Servicios;