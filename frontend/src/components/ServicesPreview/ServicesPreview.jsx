import styles from "./ServicesPreview.module.css";

import ServiceCard from "../ServiceCard/ServiceCard";

import invitaciones from "../../assets/illustrations/invitaciones.png";
import landing from "../../assets/illustrations/landing.png";
import portafolio from "../../assets/illustrations/portafolio.png";
import tarjetas from "../../assets/illustrations/soluciones.png";
import negocios from "../../assets/illustrations/negocios.png";
import giftai from "../../assets/illustrations/gif.png";

function ServicesPreview() {
  const services = [
    {
      image: invitaciones,
      title: "Invitaciones Digitales",
      description:
        "Diseños personalizados, animados e interactivos para cualquier celebración.",
      status: "Disponible",
      link: "/invitaciones",
    },
    {
      image: landing,
      title: "Landing Pages",
      description:
        "Páginas modernas enfocadas en convertir visitantes en clientes.",
      status: "Próximamente",
      disabled: true,
    },
    {
      image: portafolio,
      title: "Portafolios Profesionales",
      description:
        "Muestra tu experiencia y proyectos con un diseño elegante.",
      status: "Próximamente",
      disabled: true,
    },
    {
      image: tarjetas,
      title: "Tarjetas Digitales",
      description:
        "Comparte tus datos de contacto de forma moderna y profesional.",
      status: "Próximamente",
      disabled: true,
    },
    {
      image: negocios,
      title: "Soluciones Digitales",
      description:
        "Herramientas para automatizar y hacer crecer tu negocio.",
      status: "Próximamente",
      disabled: true,
    },
    {
      image: giftai,
      title: "GiftAI",
      description:
        "La IA te ayuda a encontrar el regalo perfecto para cualquier ocasión.",
      status: "En desarrollo",
      disabled: true,
    },
  ];

  return (
    <section className={styles.services}>

      <div className="container">

       <div className={styles.badge}>
      ✨ soluciones digitales para impulsar tus ideas.
    </div>

    <h2 className={styles.title}>
      También hacemos
     
    </h2>

        <div className={styles.slider}>

  {services.map((service) => (

    <div
      className={styles.item}
      key={service.title}
    >

      <ServiceCard
        {...service}
      />

    </div>

  ))}

</div>
      </div>

    </section>
  );
}

export default ServicesPreview;