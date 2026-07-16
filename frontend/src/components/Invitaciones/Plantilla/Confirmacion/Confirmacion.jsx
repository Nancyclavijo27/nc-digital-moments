import styles from "./Confirmacion.module.css";


function Confirmacion({ confirmacion, portada }) {



const confirmar = () => {


const mensaje = encodeURIComponent(

`Hola ${portada.pareja},

Quiero confirmar mi asistencia a su boda.

Será un placer acompañarlos en este día tan especial. 💍`

);



const url =

`https://wa.me/${confirmacion.whatsapp}?text=${mensaje}`;



window.open(
url,
"_blank"
);


};




return (

<section className={styles.confirmacion}>


<div className={styles.contenido}>


<span className={styles.detalle}>
♡
</span>



<h2>
{confirmacion.titulo}
</h2>



<div className={styles.linea}></div>



<p>
{confirmacion.mensaje}
</p>




<div className={styles.tarjeta}>


<div className={styles.icono}>
💌
</div>



<h3>
{portada.pareja}
</h3>



<p>
Esperamos compartir este momento contigo.
</p>



<button
onClick={confirmar}
>

Confirmar asistencia

</button>



</div>



</div>


</section>

);


}


export default Confirmacion;