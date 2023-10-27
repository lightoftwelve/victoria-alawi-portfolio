import styles from "./css/Project.module.css";

function ImageBox({
  imgSrc,
  index,
  contentId,
  onMouseOver,
  active,
  openModal,
}) {
  const handleImageClick = () => {
    openModal(imgSrc);
  };

  return (
    <div
      className={`${styles.imgBx} ${active ? styles.active : ""}`}
      style={{ "--i": index }}
      data-id={contentId}
      onMouseOver={onMouseOver}
    >
      <img src={imgSrc} alt="Thumbnail" onClick={handleImageClick} />
    </div>
  );
}

export default ImageBox;
