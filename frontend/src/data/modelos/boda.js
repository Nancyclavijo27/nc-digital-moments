import portadaBoda from "../../assets/images/boda/anillos.png";
import floresSuperiores from "../../assets/images/boda/floress.png";
import floresInferiores from "../../assets/images/boda/floresi.png";
import argollas from "../../assets/images/boda/argollas.png";
import separador from "../../assets/images/boda/separador.png";
import sobre from "../../assets/images/boda/sobre.png";
//import papel from "../../assets/images/boda/papel.png";
import floresLaterales from "../../assets/images/boda/florsuperizq.png";
import piefloral from "../../assets/images/boda/pieflor.png";

// Pendientes
// import sello from "../../assets/images/boda/sello-cera.png";
// import textura from "../../assets/images/boda/textura-papel.png";
// import destellos from "../../assets/images/boda/destellos.png";
// import ramas from "../../assets/images/boda/ramas.png";

const boda = {

  /*=====================================
    PORTADA
  =====================================*/

  portada: {

    titulo: "Nuestra Boda",

    pareja: "María & Juan",

    fecha: "15 de Agosto de 2026",

    frase:
      "Con inmensa alegría queremos compartir contigo el comienzo de la aventura más importante de nuestras vidas.",

    imagen: portadaBoda,

    boton: "Descubrir nuestra historia",
    scroll:"presentacion"

  },

  

  /*=====================================
  PRESENTACIÓN
=====================================*/

presentacion: {

  tipo: "sobre",

  titulo: "Con inmensa alegría",

  subtitulo: "Nuestra Invitación",

  mensaje:
`Después de caminar juntos durante este hermoso camino,
hemos decidido dar el paso más importante de nuestras vidas.

Más que una invitación, queremos compartir contigo
la felicidad de este nuevo comienzo.

Cada sonrisa, cada abrazo y cada instante
serán aún más especiales si podemos vivirlos
junto a las personas que han formado parte
de nuestra historia.

Será un honor contar con tu presencia
en el día más importante de nuestras vidas.`,

  firma: "María & Juan",

  textoSobre: "Una invitación especial",

  botonAbrir: "Abrir invitación",

  botonContinuar: "Continuar",

  scroll: "bienvenida",

  animacion: "abrirSobre",

  imagenes: {

    sobre,

    floresSuperiores,

    floresInferiores,

    floresLaterales,

    piefloral,

    argollas,

    separador,

    // Se agregarán cuando estén listas

    sello: null,

    textura: null,

    destellos: null,

    ramas: null

  }

},

  
  /*=====================================
    BIENVENIDA
  =====================================*/

  bienvenida: {

    titulo: "Nuestra historia de amor",

    mensaje:
`Todo comenzó con un encuentro inesperado,
que poco a poco se convirtió en amistad,
después en amor y finalmente en el sueño
de compartir toda una vida juntos.

Hoy queremos celebrar ese sueño
rodeados de las personas que más queremos.`,

  },

  /*=====================================
    EVENTO
  =====================================*/

  evento: {

    titulo: "El Gran Día",

    fecha: "15 de Agosto de 2026",

    ceremonia: {

      titulo: "Ceremonia",

      lugar: "Parroquia San José",

      hora: "4:00 p.m.",

      direccion:
        "Cra. 10 #20-30 Bogotá",

    },

    recepcion: {

      titulo: "Recepción",

      lugar: "Hacienda Los Rosales",

      hora: "6:00 p.m.",

      direccion:
        "Km 12 Vía La Calera",

    }

  },

  /*=====================================
  CRONOGRAMA
=====================================*/

cronograma: {

  titulo:
    "Nuestro gran día",

  momentos:[

    {
      hora:"4:00 p.m.",
      titulo:"Ceremonia",
      descripcion:
      "El momento donde comienza nuestra nueva historia."
    },


    {
      hora:"5:30 p.m.",
      titulo:"Fotos y bienvenida",
      descripcion:
      "Compartiremos momentos especiales con nuestros invitados."
    },


    {
      hora:"6:00 p.m.",
      titulo:"Recepción",
      descripcion:
      "Una celebración llena de alegría y amor."
    },


    {
      hora:"9:00 p.m.",
      titulo:"Primer baile",
      descripcion:
      "Nuestro primer baile como esposos."
    }

  ]

},

/*=====================================
  VESTIMENTA
=====================================*/

vestimenta: {

  titulo:
    "Código de vestimenta",

  estilo:
    "Elegante Formal",

  mujeres:
    "Vestido largo o cóctel elegante.",

  hombres:
    "Traje formal o corbata.",

  mensaje:
    "Queremos celebrar contigo este día tan especial con mucho estilo."

},

  /*=====================================
    CUENTA REGRESIVA
  =====================================*/

  cuentaRegresiva: {

    titulo: "Faltan",

    fechaEvento:
      "2026-08-15T16:00:00",

  },

  /*=====================================
    GALERÍA
  =====================================*/

  galeria: {

    titulo:
      "Momentos que guardaremos para siempre",

    imagenes: [

      "",

      "",

      "",

      ""

    ]

  },

  /*=====================================
    UBICACIÓN
  =====================================*/

  ubicacion: {

    titulo:
      "Cómo llegar",

    direccion:
      "Hacienda Los Rosales, Bogotá",

    mapa:
      "",

  },

  /*=====================================
    CONFIRMACIÓN
  =====================================*/

  confirmacion: {

    titulo:
      "Confirma tu asistencia",

    mensaje:
      "Nos haría muy felices contar contigo en este día tan especial.",

    whatsapp:
      "573222039361",

  },

  /*=====================================
    REGALOS
  =====================================*/

  regalos: {

    titulo:
      "Mesa de regalos",

    mensaje:
`El mejor regalo será compartir este día contigo.

Si deseas tener un detalle con nosotros,
próximamente encontrarás aquí la información.`,

  },

  /*=====================================
    MENSAJE FINAL
  =====================================*/

  mensajeFinal: {

    titulo:
      "Gracias",

    mensaje:
`Gracias por hacer parte de nuestra historia.

Esperamos compartir contigo uno de los días
más felices de nuestras vidas.`,

    firma:
      "Con cariño,\nMaría & Juan"

  }

};

export default boda;