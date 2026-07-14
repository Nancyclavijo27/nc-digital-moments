import styles from "./InvitacionDestacada.module.css";

import Button from "../../Button/Button";

import {

  FaMusic,

  FaMapMarkerAlt,

  FaClock,

  FaCheckCircle,

} from "react-icons/fa";

import portada from "../../../assets/images/cumpleaños.png";

function InvitacionDestacada() {

  return (

    <section className={styles.section}>

      <div className="container">

        <div className={styles.badge}>

          ⭐ Invitación destacada

        </div>

        <div className={styles.card}>

          {/* Imagen */}

          <div className={styles.imageContainer}>

            <img

              src={portada}

              alt="Invitación destacada"

              className={styles.image}

            />

          </div>

          {/* Información */}

          <div className={styles.content}>

            <h2>
  Eterno Amor
</h2>

<p>
  Una invitación digital elegante diseñada para bodas.
  Personalízala con tus fotos, música, ubicación,
  confirmación de asistencia y mucho más para crear una
  experiencia inolvidable para tus invitados.
</p>

            <div className={styles.features}>

              <div>

                <FaMusic />

                <span>Música personalizada</span>

              </div>

              <div>

                <FaClock />

                <span>Cuenta regresiva</span>

              </div>

              <div>

                <FaMapMarkerAlt />

                <span>Ubicación integrada</span>

              </div>

              <div>

                <FaCheckCircle />

                <span>Confirmación de asistencia</span>

              </div>

            </div>

            <Button to="/demoinvitacion"

            >

              Ver demostración

            </Button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default InvitacionDestacada;