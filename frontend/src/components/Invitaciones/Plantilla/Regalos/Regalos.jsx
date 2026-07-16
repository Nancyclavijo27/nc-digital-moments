import styles from "./Regalos.module.css";


function Regalos({ regalos }) {


return (

<section className={styles.regalos}>


<div className={styles.contenido}>


<span className={styles.detalle}>
✦
</span>



<h2>
{regalos.titulo}
</h2>



<div className={styles.linea}></div>



<div className={styles.tarjeta}>


<div className={styles.icono}>
🎁
</div>



<p>
{regalos.mensaje}
</p>



<div className={styles.decoracion}>
♡
</div>



</div>



</div>


</section>

);


}


export default Regalos;