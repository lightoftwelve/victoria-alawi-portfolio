import { useState } from "react";

// Data Imports
import resumeEntries from "./data/resumeEnteries.json";
import educationEntries from "./data/educationEnteries.json";
import iconData from "./data/iconData.json";

// Component Imports
import Skills from "./Skills";
import Download from "./Download";

// CSS Imports
import style from "../about/css/ProfileCard.module.css";
import styles from "./css/ResumeSection.module.css";

// Helper function to convert newline characters to <br/> elements
const formatText = (text) => {
  if (typeof text !== "string") return text; // Return the original value if it's not a string
  return text.split("\n").reduce((arr, line, index, { length }) => {
    if (index === length - 1) return arr.concat(line); // If it's the last line, just add it
    return arr.concat(line, <br key={index} />); // If not, add the line and a <br/> element
  }, []);
};

export default function ResumeSection() {
  const [activeContent, setActiveContent] = useState("content1");
  const [resumeData] = useState(resumeEntries);
  const [educationData] = useState(educationEntries);

  const currentData = activeContent === "content1" ? resumeData : educationData;

  const handleMouseOver = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.resumePageWrapper}>
        <div className={styles.tableWrapper}>
          <div className={styles.bottom}>
            <div className={style.icon}>
              {iconData.map((item, index) => (
                <div
                  key={index}
                  className={`${style.imgBx} ${
                    activeContent === `content${index + 1}` ? style.active : ""
                  }`}
                  style={{ "--i": index }}
                  onMouseOver={() => handleMouseOver(`content${index + 1}`)}
                >
                  <img
                    src={`/api/photos/images/${item.image}`}
                    alt={item.alt}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.resumeWrapper}>
          <div className={`${styles.contentBx} ${styles.active}`} id="content1">
            <section
              className={styles.resumeList}
              style={{
                visibility: [
                  "content1",
                  "content2",
                  "content3",
                  "content4",
                ].includes(activeContent)
                  ? "visible"
                  : "hidden",
                opacity: [
                  "content1",
                  "content2",
                  "content3",
                  "content4",
                ].includes(activeContent)
                  ? 1
                  : 0,
              }}
            >
              {["content1", "content2"].includes(activeContent) &&
                currentData.map((entry, index) => (
                  <div key={index} className={styles.resumeTitleContainer}>
                    <h3 className={styles.resumeTitle}>
                      {formatText(entry.title)}
                    </h3>
                    <div className={styles.resumeSubTitle}>
                      <h4>{formatText(entry.subtitle)}</h4>
                      <p>{entry.dates}</p>
                      <p>{formatText(entry.company)}</p>
                    </div>
                    <ul className={styles.squareBulletList}>
                      {entry.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              {activeContent === "content3" && <Skills />}
              {activeContent === "content4" && <Download />}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
