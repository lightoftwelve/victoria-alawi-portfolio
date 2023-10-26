import styles from "./css/ResumeSection.module.css";

function Download() {
  return (
    <div className={styles.downloadWrapper}>
      <div className={styles.downloadContent}>
        <h2 className={styles.downloadTitle}>Thank You for Your Interest!</h2>
        <p className={styles.downloadText}>
          Im excited about the opportunity to connect and potentially work
          together. You can download my resume below to get to know more about
          my professional journey.
        </p>
        <div className={styles.downloadButtonContainer}>
          <a
            href="../../../public/victoria-alawi-resume.pdf"
            download="victoria-alawi-resume.pdf"
            className={styles.downloadButton}
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Download;
