import { useState } from "react";
import axios from "axios";
import styles from "./css/Contact.module.css";
import InputBox from "./InputBox";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formKey, setFormKey] = useState(1);

  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setFieldErrors((prev) => ({
      ...prev,
      [name]: value === "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "/.netlify/functions/send-email",
        formData
      );
      // const response = await axios.post("/api/contact/send-email", formData);
      if (response.status === 200) {
        console.log("Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
        setSuccessMessage("Thank you! We'll get back to you shortly.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
        setErrorMessage("");
        setFormKey((prevKey) => prevKey + 1);
      } else {
        console.error("Error sending email");
        setErrorMessage("Error sending email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error sending email. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailChange = (e) => {
    handleChange(e);

    // Email validation using a simple regex
    const email = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email) && email !== "") {
      setErrorMessage("Please complete a valid email address");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.box} key={formKey}>
        <form id={styles.contactForm} onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <InputBox
            label="*Name:"
            type="text"
            id="name"
            name="name"
            required={true}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={fieldErrors.name}
          />
          <InputBox
            label="*Email:"
            type="email"
            id="email"
            name="email"
            required={true}
            value={formData.email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            error={fieldErrors.email}
          />
          <InputBox
            label="*Message:"
            type="textarea"
            id="message"
            name="message"
            required={true}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={fieldErrors.message}
          />
          <button type="submit">SEND</button>
          <div
            style={{
              display: successMessage ? "block" : "none",
              color: "white",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <p>{successMessage}</p>
          </div>
          <div
            style={{
              display: errorMessage ? "block" : "none",
              color: "white",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <p>{errorMessage}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
