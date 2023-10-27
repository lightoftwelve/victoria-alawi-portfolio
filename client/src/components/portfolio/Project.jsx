import { Fragment, useState } from "react";
import ImageBox from "./ImageBox";
import ContentBox from "./ContentBox";
import ImageModal from "./ImageModal";
import styles from "./css/Project.module.css";
import portfolioData from "../../components/portfolio/data/portfolioData.json";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with the first content active
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(null);

  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc(null);
  };

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
              openModal={openModal} // Pass openModal as a prop
            />
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
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={modalImageSrc}
        onClose={closeModal}
      />
    </div>
  );
}
