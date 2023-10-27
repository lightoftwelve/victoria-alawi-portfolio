import styles from "./css/ImageModal.module.css";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <img src={imageSrc} alt="Enlarged" className={styles.image} />
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </div>
  );
};

export default ImageModal;
