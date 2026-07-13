import styles from "./CategoriasInvitaciones.module.css";

import TarjetaCategoria from "../TarjetaCategoria/TarjetaCategoria";

import {
  FaBirthdayCake,
  FaGlassCheers,
  FaBaby,
  FaCrown,
  
} from "react-icons/fa";

function CategoriasInvitaciones() {

  const categorias = [

    {
      icon: <FaBirthdayCake />,
      title: "Cumpleaños",
      description:
        "Invitaciones digitales modernas para celebrar un día inolvidable.",
      link: "/invitaciones",
    },

    {
      icon: <FaGlassCheers />,
      title: "Bodas",
      description:
        "Diseños elegantes y románticos para anunciar tu gran día.",
      link: "/invitaciones",
    },

    {
      icon: <FaBaby />,
      title: "Baby Shower",
      description:
        "Colecciones tiernas y personalizadas para recibir al nuevo integrante.",
      link: "/invitaciones",
    },

    {
      icon: <FaCrown />,
      title: "15 Años",
      description:
        "Invitaciones únicas para una celebración llena de magia.",
      link: "/invitaciones",
    },

    

  ];

  return (

    <section
      className={styles.section}
      id="coleccion"
    >

      <div className="container">

        <div className={styles.badge}>
          ✨ Explora nuestras categorías
        </div>

        <h2 className={styles.title}>
          Encuentra la invitación perfecta
        </h2>

        <p className={styles.subtitle}>
          Cada celebración merece un diseño especial. Explora nuestras
          colecciones y descubre la invitación ideal para compartir tus
          mejores momentos.
        </p>

        <div className={styles.grid}>

          {

            categorias.map((categoria, index) => (

              <TarjetaCategoria

                key={index}

                icon={categoria.icon}

                title={categoria.title}

                description={categoria.description}

                link={categoria.link}

              />

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default CategoriasInvitaciones;