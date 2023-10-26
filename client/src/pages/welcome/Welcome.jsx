import styles from "./css/Welcome.module.css";

function WelcomePage() {
  const MAX_TILES = 250;

  return (
    <div className={styles.welcomePageWrapper}>
      <section className={styles.welcomePage}>
        <div className={styles.welcomeTitleBackground}>
          <h2 className={styles.welcomeTitle}>WELCOME</h2>
        </div>
        {Array.from({ length: MAX_TILES }).map((_, index) => (
          <span key={index} className={styles.welcomeTiles}></span>
        ))}
      </section>
    </div>
  );
}

export default WelcomePage;
