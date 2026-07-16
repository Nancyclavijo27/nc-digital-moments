import styles from "./Galeria.module.css";


function Galeria({ galeria }) {


return (

<section className={styles.galeria}>


<div className={styles.contenido}>


<span className={styles.detalle}>
✦
</span>



<h2>
{galeria.titulo}
</h2>



<div className={styles.linea}></div>




<div className={styles.grid}>


{
galeria.imagenes.map((imagen,index)=>(


<div

key={index}

className={`${styles.foto} ${
index % 3 === 0
? styles.grande
:""
}`}


>


<img

src={imagen}

alt={`Momento ${index + 1}`}

/>


</div>


))

}



</div>



</div>


</section>

);


}


export default Galeria;