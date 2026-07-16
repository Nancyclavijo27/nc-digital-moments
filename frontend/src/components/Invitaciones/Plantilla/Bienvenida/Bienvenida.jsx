import styles from "./Bienvenida.module.css";


function Bienvenida({ bienvenida }) {


  return (

    <section
      id="bienvenida"
      className={styles.bienvenida}
    >


      <div className={styles.decoracion}>
        ✦
      </div>



      <div className={styles.contenido}>


        <h2>
          {bienvenida.titulo}
        </h2>



        <div className={styles.linea}>
          
        </div>



        <p>
          {bienvenida.mensaje}
        </p>



        <div className={styles.corazon}>
          ♡
        </div>


      </div>


    </section>

  );

}


export default Bienvenida;