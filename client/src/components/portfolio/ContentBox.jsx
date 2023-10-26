import styles from "./css/Project.module.css";

function ContentBox({
  isActive,
  contentId,
  image,
  title,
  subtitle,
  socialLinks,
}) {
  return (
    <div
      className={`${styles.contentBx} ${isActive ? styles.active : ""}`}
      id={contentId}
    >
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <a
            className={styles.fancyBox}
            href={image}
            data-fancybox="gallery"
            data-caption={`${title} Preview`}
          >
            <img src={image} alt={title} />
          </a>
        </div>
        <div className={styles.textBx}>
          <h2>
            {title}
            <br />
            <span>{subtitle}</span>
          </h2>
          <ul className={styles.sci}>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`icon ${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
