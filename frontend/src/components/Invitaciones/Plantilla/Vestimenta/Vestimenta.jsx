import styles from "./Vestimenta.module.css";


function Vestimenta({ vestimenta }) {


return (

<section className={styles.vestimenta}>


<div className={styles.contenido}>


<span className={styles.detalle}>
✦
</span>



<h2>
{vestimenta.titulo}
</h2>



<div className={styles.linea}></div>



<h3>
{vestimenta.estilo}
</h3>




<div className={styles.tarjetas}>


<div className={styles.card}>


<div className={styles.icono}>
👗
</div>


<h4>
Mujeres
</h4>


<p>
{vestimenta.mujeres}
</p>


</div>





<div className={styles.card}>


<div className={styles.icono}>
🤵
</div>


<h4>
Hombres
</h4>


<p>
{vestimenta.hombres}
</p>


</div>



</div>




<p className={styles.mensaje}>

{vestimenta.mensaje}

</p>



</div>


</section>

);


}


export default Vestimenta;