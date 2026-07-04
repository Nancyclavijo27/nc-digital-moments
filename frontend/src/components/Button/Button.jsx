import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({
  children,
  to = "/",
  variant = "primary",
  size = "medium",
}) {
  return (
    <Link
      to={to}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
      `}
    >
      {children}
    </Link>
  );
}

export default Button;