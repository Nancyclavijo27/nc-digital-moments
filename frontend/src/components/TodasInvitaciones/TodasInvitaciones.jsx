import styles from "./TodasInvitaciones.module.css";

import TarjetaInvitacion from "../TarjetaInvitacion/TarjetaInvitacion";

import invitaciones from "../../data/invitaciones";

function TodasInvitaciones() {

  return (

    <section
      className={styles.section}
      id="coleccion"
    >

      <div className="container">

        <div className={styles.badge}>
          ✨ Nuestra colección
        </div>

        <h2 className={styles.title}>
          Todas las invitaciones
        </h2>

        <p className={styles.subtitle}>

          Explora nuestros primeros diseños digitales.
          Cada invitación puede personalizarse para crear
          una experiencia única.

        </p>

        <div className={styles.grid}>

          {

            invitaciones.map((item)=>(

              <TarjetaInvitacion

                key={item.id}

                image={item.image}

                title={item.title}

                category={item.category}

                description={item.description}

                link={item.link}

              />

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default TodasInvitaciones;