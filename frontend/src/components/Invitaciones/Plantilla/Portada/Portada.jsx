import { useEffect, useState } from "react";
import styles from "./Portada.module.css";


function Portada({ portada }) {

  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {

    setMostrar(true);

  }, []);


const irSeccion = () => {

  document
    .getElementById("presentacion")
    ?.scrollIntoView({
      behavior:"smooth"
    });

};


return (

<section

className={styles.portada}

style={{
backgroundImage:`url(${portada.imagen})`
}}

>


<div className={styles.overlay}></div>


<div
  className={`${styles.content} ${
    mostrar ? styles.visible : ""
  }`}
>


<span className={styles.brand}>
✨ NC Digital Moments
</span>

<span className={styles.modelo}>
{portada.titulo}
</span>



<h1 className={styles.pareja}>
{portada.pareja}
</h1>



<p className={styles.fecha}>
{portada.fecha}
</p>



<p className={styles.frase}>
{portada.frase}
</p>




<button

className={styles.button}

onClick={irSeccion}

>

Descubrir nuestra historia

</button>



</div>


</section>

);


}


export default Portada;