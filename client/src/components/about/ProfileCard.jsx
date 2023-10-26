import styles from "./css/ProfileCard.module.css";

export default function ProfileCard({ profile }) {
  const { name, titles, links } = profile;

  return (
    <section className={styles.aboutPageWrapper}>
      <div className={styles.square}>
        <span></span>
        <span></span>
        <span></span>
        <div className={styles.content}>
          <div className={`${styles.contentBx} ${styles.active}`} id="content1">
            <div className={styles.card}>
              <div className={styles.imgBx}>
                <img src={profile.image} alt="Profile" />
              </div>

              <div className={styles.textBx}>
                <h2>
                  {name}
                  <br />
                  <b>
                    {titles.map((title, index) => (
                      <p className="titleTest" key={index}>
                        {title}
                        <br />
                      </p>
                    ))}
                  </b>
                </h2>

                <ul className={styles.sci}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <ion-icon name={link.icon}></ion-icon>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
