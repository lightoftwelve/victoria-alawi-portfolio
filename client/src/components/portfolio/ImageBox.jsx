import styles from "./css/Project.module.css";

function ImageBox({ imgSrc, index, contentId, onMouseOver, active }) {
  return (
    <div
      className={`${styles.imgBx} ${active ? styles.active : ""}`}
      style={{ "--i": index }}
      data-id={contentId}
      onMouseOver={onMouseOver}
    >
      <img src={imgSrc} alt={contentId} />
    </div>
  );
}

export default ImageBox;
