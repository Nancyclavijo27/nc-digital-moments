import styles from "./Portada.module.css";


function Portada({ portada }) {


const irApertura = () => {

 document
 .getElementById("apertura")
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


<div className={styles.content}>




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

onClick={irApertura}

>

Celebrar con nosotros

</button>




<span className={styles.scroll}>

Desliza para descubrir ↓

</span>


<span className={styles.brand}>
✨ NC Digital Moments
</span>



</div>


</section>

);


}


export default Portada;