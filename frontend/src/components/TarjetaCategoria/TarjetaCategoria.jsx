import styles from "./TarjetaCategoria.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function TarjetaCategoria({

    icon,

    title,

    description,

    link

}){

return(

<Link
to={link}
className={styles.card}
>

<div className={styles.icon}>

{icon}

</div>

<h3>

{title}

</h3>

<p>

{description}

</p>

<div className={styles.link}>

Explorar colección

<FaArrowRight/>

</div>

</Link>

)

}

export default TarjetaCategoria;