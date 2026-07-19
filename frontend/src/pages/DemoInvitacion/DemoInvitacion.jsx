import { useEffect } from "react";
import styles from "./DemoInvitacion.module.css";

import boda from "../../data/modelos/boda";


import Portada from "../../components/Invitaciones/Plantilla/Portada/Portada";
import Presentacion from "../../components/Invitaciones/Plantilla/Presentacion/Presentacion";
import Cronograma from "../../components/Invitaciones/Plantilla/Cronograma/Cronograma";
import Bienvenida from "../../components/Invitaciones/Plantilla/Bienvenida/Bienvenida";
import Vestimenta from "../../components/Invitaciones/Plantilla/Vestimenta/Vestimenta";
import Evento from "../../components/Invitaciones/Plantilla/Evento/Evento";
import CuentaRegresiva from "../../components/Invitaciones/Plantilla/CuentaRegresiva/CuentaRegresiva";
import Galeria from "../../components/Invitaciones/Plantilla/Galeria/Galeria";
import Ubicacion from "../../components/Invitaciones/Plantilla/Ubicacion/Ubicacion";
import Confirmacion from "../../components/Invitaciones/Plantilla/Confirmacion/Confirmacion";
import Regalos from "../../components/Invitaciones/Plantilla/Regalos/Regalos";
import MensajeFinal from "../../components/Invitaciones/Plantilla/MensajeFinal/MensajeFinal";




function DemoInvitacion(){

  useEffect(() => {

    window.scrollTo({
      top:0,
      behavior:"instant"
    });

  }, []);


return(

<main className={styles.page}>


<Portada
  portada={boda.portada}
/>


<Presentacion
  presentacion={boda.presentacion}
/>


<Bienvenida
  bienvenida={boda.bienvenida}
/>


<Evento
  evento={boda.evento}
/>


<Cronograma
  cronograma={boda.cronograma}
/>


<CuentaRegresiva
  cuentaRegresiva={boda.cuentaRegresiva}
/>


<Vestimenta
  vestimenta={boda.vestimenta}
/>


<Galeria
  galeria={boda.galeria}
/>


<Ubicacion
  ubicacion={boda.ubicacion}
/>


<Confirmacion
  confirmacion={boda.confirmacion}
  portada={boda.portada}
/>


<Regalos
  regalos={boda.regalos}
/>


<MensajeFinal
  mensajeFinal={boda.mensajeFinal}
/>

</main>

);


}


export default DemoInvitacion;