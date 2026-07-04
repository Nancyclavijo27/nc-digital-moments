import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

function WhatsAppButton({
  text = "WhatsApp",
  phone = "573222039361",
  className = "",
}) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${className}`}
    >
      <FaWhatsapp className={styles.icon} />

      <span>{text}</span>
    </a>
  );
}

export default WhatsAppButton;