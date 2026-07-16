import styles from "./Cronograma.module.css";


function Cronograma({ cronograma }) {


return (

<section className={styles.cronograma}>


<div className={styles.contenido}>


<span className={styles.detalle}>
✦
</span>



<h2>
{cronograma.titulo}
</h2>



<div className={styles.lineaTitulo}></div>



<div className={styles.timeline}>


{
cronograma.momentos.map((momento,index)=>(


<div
key={index}
className={styles.item}
>



<div className={styles.punto}>
</div>



<div className={styles.tarjeta}>


<span>
{momento.hora}
</span>



<h3>
{momento.titulo}
</h3>



<p>
{momento.descripcion}
</p>



</div>


</div>


))

}



</div>



</div>


</section>

);


}


export default Cronograma;