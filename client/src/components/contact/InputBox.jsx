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
  // State to keep track of whether the input is filled.
  const [filled, setFilled] = useState(false);

  // Event handler for changes in the input.
  const handleInputChange = (e) => {
    const inputValue = e.target.value; // Retrieving the input value from the event object.
    setFilled(!!inputValue); // Updating the 'filled' state based on whether the input has a value.

    // If an 'onChange' prop is provided and it's a function, call it.
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

      {/* Conditional rendering to determine whether to render a textarea or input element. */}
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
      {/* Conditional rendering to display an error message if there is an error. */}
      {error && (
        <div className={styles.errorBox}>
          <div className={styles.errorText}>Required Field</div>
        </div>
      )}
    </div>
  );
}
