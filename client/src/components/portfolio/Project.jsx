import { Fragment, useState } from "react";
import ImageBox from "./ImageBox";
import ContentBox from "./ContentBox";
import styles from "./css/Project.module.css";
import portfolioData from "../../components/portfolio/data/portfolioData.json";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with the first content active

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {portfolioData.map((item, index) => (
          <Fragment key={index}>
            <ImageBox
              key={index}
              // imgSrc={`/api/photos/images/${item.image}`}
              imgSrc={`/.netlify/functions/images/${item.image}`}
              index={index}
              contentId={`content${index + 1}`}
              active={index === activeIndex}
              onMouseOver={() => setActiveIndex(index)}
            />
            <ul className={styles.sci}>
              {item.socialLinks.map((link, linkIndex) => (
                <li key={`${index}-${linkIndex}`}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <ion-icon name={link.icon}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
      <div className={styles.content}>
        {portfolioData.map((item, index) => (
          <ContentBox
            key={index}
            isActive={index === activeIndex}
            contentId={`content${index + 1}`}
            // image={`/api/photos/images/${item.image}`}
            image={`/.netlify/functions/images/${item.image}`}
            title={item.title}
            subtitle={item.subtitle}
            socialLinks={item.socialLinks}
          />
        ))}
      </div>
    </div>
  );
}
