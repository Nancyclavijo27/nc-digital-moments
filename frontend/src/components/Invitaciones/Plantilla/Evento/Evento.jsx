import styles from "./Evento.module.css";


function Evento({ evento }) {


const abrirMapa = (direccion)=>{

  const url = 
  `https://www.google.com/maps/search/?api=1&query=${direccion}`;

  window.open(url,"_blank");

};



return (

<section
className={styles.evento}
>


<div className={styles.contenido}>


<span className={styles.icono}>
✦
</span>



<h2>
{evento.titulo}
</h2>


<p className={styles.fecha}>
{evento.fecha}
</p>




<div className={styles.tarjetas}>


<div className={styles.card}>


<div className={styles.simbolo}>
💒
</div>


<h3>
{evento.ceremonia.titulo}
</h3>


<p>
{evento.ceremonia.lugar}
</p>


<span>
{evento.ceremonia.hora}
</span>


<p>
{evento.ceremonia.direccion}
</p>



<button
onClick={()=>abrirMapa(evento.ceremonia.direccion)}
>

Ver ubicación

</button>


</div>





<div className={styles.card}>


<div className={styles.simbolo}>
🥂
</div>


<h3>
{evento.recepcion.titulo}
</h3>


<p>
{evento.recepcion.lugar}
</p>


<span>
{evento.recepcion.hora}
</span>


<p>
{evento.recepcion.direccion}
</p>



<button
onClick={()=>abrirMapa(evento.recepcion.direccion)}
>

Ver ubicación

</button>


</div>



</div>


</div>


</section>

);


}


export default Evento;