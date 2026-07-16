import { useEffect, useState, useCallback } from "react";

import styles from "./CuentaRegresiva.module.css";


function CuentaRegresiva({ cuentaRegresiva }) {


  const calcularTiempo = useCallback(() => {


    const fecha = new Date(
      cuentaRegresiva.fechaEvento
    ).getTime();


    const ahora = new Date().getTime();


    const diferencia = fecha - ahora;



    if (diferencia <= 0) {

      return {

        dias: 0,

        horas: 0,

        minutos: 0,

        segundos: 0

      };

    }



    return {


      dias: Math.floor(
        diferencia /
        (1000 * 60 * 60 * 24)
      ),



      horas: Math.floor(
        (diferencia /
        (1000 * 60 * 60)) % 24
      ),



      minutos: Math.floor(
        (diferencia /
        (1000 * 60)) % 60
      ),



      segundos: Math.floor(
        (diferencia /
        1000) % 60
      )


    };


  }, [
    cuentaRegresiva.fechaEvento
  ]);





  const [tiempo, setTiempo] = useState(
    calcularTiempo()
  );





  useEffect(() => {


    const intervalo = setInterval(() => {


      setTiempo(
        calcularTiempo()
      );


    }, 1000);



    return () => {

      clearInterval(intervalo);

    };



  }, [
    calcularTiempo
  ]);






  return (


    <section className={styles.contador}>


      <div className={styles.contenido}>


        <span className={styles.detalle}>
          ✦
        </span>



        <h2>
          {cuentaRegresiva.titulo}
        </h2>



        <div className={styles.linea}></div>




        <div className={styles.reloj}>


          <div>

            <strong>
              {tiempo.dias}
            </strong>

            <span>
              Días
            </span>

          </div>




          <div>

            <strong>
              {tiempo.horas}
            </strong>

            <span>
              Horas
            </span>

          </div>




          <div>

            <strong>
              {tiempo.minutos}
            </strong>

            <span>
              Minutos
            </span>

          </div>




          <div>

            <strong>
              {tiempo.segundos}
            </strong>

            <span>
              Segundos
            </span>

          </div>



        </div>




        <p className={styles.mensaje}>

          Nos vemos para celebrar este día inolvidable

        </p>



      </div>



    </section>


  );


}


export default CuentaRegresiva;