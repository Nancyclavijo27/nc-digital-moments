import styles from "./CatalogoHome.module.css";

import TarjetaCatalogo from "./TarjetaCatalogo/TarjetaCatalogo";

import cumple from "../../assets/images/cumpleaños.png";
import boda from "../../assets/images/matri.jpg";
import baby from "../../assets/images/bebe.jpg";
import quince from "../../assets/images/15Años.png";

function CatalogoHome() {

  const categorias = [

    {
      image: cumple,
      title: "Cumpleaños",
      description: "Invitaciones digitales llenas de color para celebrar momentos inolvidables.",
      link: "/invitaciones/cumpleanos",
    },

    {
      image: boda,
      title: "Bodas",
      description: "Diseños elegantes y románticos para anunciar el día más especial.",
      link: "/invitaciones/bodas",
    },

    {
      image: baby,
      title: "Baby Shower",
      description: "Invitaciones tiernas y personalizadas para recibir al nuevo integrante.",
      link: "/invitaciones/baby-shower",
    },

    {
      image: quince,
      title: "15 Años",
      description: "Colecciones modernas y elegantes para una celebración inolvidable.",
      link: "/invitaciones/15-anos",
    },

  ];

  return (

    <section className={styles.section}>

      <div className="container">

        <div className={styles.badge}>
          ✨ Diseños pensados para cada ocasión
        </div>

        <h2 className={styles.title}>
          Invitaciones digitales
        </h2>

        <p className={styles.subtitle}>
          Explora algunos de nuestros diseños para momentos especiales.
          Encuentra la invitación perfecta para cada ocasión.
        </p>

        <div className={styles.grid}>

          {

            categorias.map((categoria, index) => (

              <TarjetaCatalogo

                key={index}

                image={categoria.image}

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

export default CatalogoHome;