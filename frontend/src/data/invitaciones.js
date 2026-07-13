// imágenes

import cumple from "../assets/images/cumpleaños.png";
import boda from "../assets/images/matri.jpg";
import baby from "../assets/images/bebe.jpg";
import quince from "../assets/images/15Años.png";

const invitaciones = [

  {

    id:1,

    image:cumple,

    category:"Cumpleaños",

    title:"Cumpleaños Elegante",

    description:"Una invitación moderna, elegante y completamente personalizable.",

    link:"/invitaciones/cumpleanos/elegante",

    featured:true

  },

  {

    id:2,

    image:boda,

    category:"Bodas",

    title:"Boda Garden",

    description:"Diseño romántico inspirado en jardines y flores.",

    link:"/invitaciones/bodas/garden",

    featured:false

  },

  {

    id:3,

    image:baby,

    category:"Baby Shower",

    title:"Baby Sweet",

    description:"Diseño delicado para celebrar la llegada del bebé.",

    link:"/invitaciones/baby-shower/sweet",

    featured:false

  },

  {

    id:4,

    image:quince,

    category:"15 Años",

    title:"Princess",

    description:"Una invitación elegante para una noche inolvidable.",

    link:"/invitaciones/15-anos/princess",

    featured:false

  }

];

export default invitaciones;