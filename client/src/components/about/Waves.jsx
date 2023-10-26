import styles from "./css/Waves.module.css";

export default function WaveImages() {
  return (
    <div className={styles.bottom}>
      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`} id="wave1"></div>
        <div className={`${styles.wave} ${styles.wave2}`} id="wave2"></div>
        <div className={`${styles.wave} ${styles.wave3}`} id="wave3"></div>
        <div className={`${styles.wave} ${styles.wave4}`} id="wave4"></div>
      </div>
    </div>
  );
}
