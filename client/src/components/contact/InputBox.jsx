import { useState } from "react";
import styles from "./css/Contact.module.css";

export default function InputBox({
  label,
  type,
  id,
  name,
  required,
  value,
  onChange = () => {},
  onBlur = () => {},
  error,
}) {
  const [filled, setFilled] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setFilled(!!inputValue);

    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  const isTextArea = type === "textarea";

  return (
    <div
      className={`${styles.inputBox} ${filled ? styles.filled : ""}`}
      style={{ position: "relative" }}
    >
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={handleInputChange}
          className={`${styles.input} ${isTextArea ? styles.textarea : ""}`}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={handleInputChange}
          className={styles.input}
          onBlur={onBlur}
        />
      )}
      {error && (
        <div className={styles.errorBox}>
          <div className={styles.errorText}>Required Field</div>
        </div>
      )}
    </div>
  );
}
