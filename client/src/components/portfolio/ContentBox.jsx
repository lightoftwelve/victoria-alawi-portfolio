import styles from "./css/Project.module.css";

function ContentBox({
  isActive,
  contentId,
  image,
  title,
  subtitle,
  socialLinks,
  openModal,
}) {
  const handleImageClick = () => {
    openModal(image);
  };
  return (
    <div
      className={`${styles.contentBx} ${isActive ? styles.active : ""}`}
      id={contentId}
    >
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <img src={image} alt={title} onClick={handleImageClick} />
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
                <a href={link.url} target="_blank" rel="noreferrer">
                  <ion-icon name={link.icon}></ion-icon>
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
