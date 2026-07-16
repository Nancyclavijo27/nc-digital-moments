import styles from "./MensajeFinal.module.css";


function MensajeFinal({ mensajeFinal }) {


return (

<section className={styles.final}>


<div className={styles.overlay}></div>



<div className={styles.contenido}>


<span className={styles.detalle}>
♡
</span>



<h2>
{mensajeFinal.titulo}
</h2>



<div className={styles.linea}></div>



<p>
{mensajeFinal.mensaje}
</p>



<h3>
{mensajeFinal.firma}
</h3>



<div className={styles.cierre}>
✦
</div>



</div>


</section>

);


}


export default MensajeFinal;