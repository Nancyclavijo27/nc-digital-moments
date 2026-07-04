import styles from "./SectionTitle.module.css";

function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}) {
  return (
    <div
      className={`${styles.container} ${styles[align]}`}
    >
      {subtitle && (
        <span className={styles.subtitle}>
          {subtitle}
        </span>
      )}

      <h2 className={styles.title}>
        {title}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;