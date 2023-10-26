import skillsData from "./data/skillEnteries.json";
import styles from "./css/ResumeSection.module.css";

const Skills = () => {
  return (
    <div>
      {skillsData.map((category) => (
        <div key={category.type} className={styles.resumeTitleContainer}>
          <h3 className={styles.resumeTitle}>{category.type}</h3>
          <ul className={styles.starBulletList}>
            {category.skills.map((skill, index) => (
              <li key={index}>
                <span className={styles.stars}>
                  {"★".repeat(skill.rating)}
                  {"☆".repeat(5 - skill.rating)}
                </span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
