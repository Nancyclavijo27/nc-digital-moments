import styles from "./Ubicacion.module.css";


function Ubicacion({ ubicacion }) {


const abrirMapa = () => {


const url = 
`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
ubicacion.direccion
)}`;


window.open(
url,
"_blank"
);


};



return (

<section className={styles.ubicacion}>


<div className={styles.contenido}>


<span className={styles.detalle}>
✦
</span>



<h2>
{ubicacion.titulo}
</h2>



<div className={styles.tarjeta}>


<div className={styles.icono}>
📍
</div>



<h3>
Lugar del evento
</h3>



<p>
{ubicacion.direccion}
</p>



<div className={styles.mapa}>


<div className={styles.circulo}>

📌

</div>


</div>




<button
onClick={abrirMapa}
>

Ver ubicación

</button>



</div>



</div>


</section>

);


}


export default Ubicacion;