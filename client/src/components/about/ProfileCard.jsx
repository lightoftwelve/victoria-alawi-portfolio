import styles from "./css/ProfileCard.module.css";

// The ProfileCard component takes a single prop 'profile' which should be an object containing profile data.
export default function ProfileCard({ profile }) {
  const { name, titles, links } = profile;

  return (
    <section className={styles.aboutPageWrapper}>
      <div className={styles.square}>
        {/* Decorative rotating spans */}
        <span></span>
        <span></span>
        <span></span>

        {/* Content wrapper for profile card*/}
        <div className={styles.content}>
          <div className={`${styles.contentBx} ${styles.active}`} id="content1">
            <div className={styles.card}>
              {/* Image box for the profile picture */}
              <div className={styles.imgBx}>
                <img src={profile.image} alt="Profile" />
              </div>
              {/* Text box containing the profile's text information. */}
              <div className={styles.textBx}>
                <h2>
                  {name}
                  <br />
                  {/* Titles are mapped over and each is wrapped in a <p> tag with a 'titleTest' class.
                   */}
                  <b>
                    {titles.map((title, index) => (
                      <p className="titleTest" key={index}>
                        {title}
                        <br />
                      </p>
                    ))}
                  </b>
                </h2>

                {/* Social links or other relevant links. */}
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
