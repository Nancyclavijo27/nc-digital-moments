import CategoriaHero from "../../components/CategoriaHero/CategoriaHero";

import heroImg from "../../assets/images/invitacion.png";

function Invitaciones(){

return(

<>

<CategoriaHero

badge="✨ Colección exclusiva"

title="Invitaciones digitales para cada momento especial"

description="Encuentra diseños modernos, elegantes y totalmente personalizables para celebrar cumpleaños, bodas, baby shower, quince años y muchas ocasiones más."

image={heroImg}

buttonText="Ver categorías"

buttonLink="#categorias"

/>

</>

)

}

export default Invitaciones;