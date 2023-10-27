import { useState } from "react";
import axios from "axios";
import styles from "./css/Contact.module.css";
import InputBox from "./InputBox";

export default function ContactForm() {
  // State for managing form data.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State for managing the success and error messages.
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // State to force re-render the form to clear the values after submission.
  const [formKey, setFormKey] = useState(1);

  // State for managing field-specific errors.
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Function to handle field blur events (i.e., when a field loses focus).
  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Setting field-specific error based on whether the field is empty.
    setFieldErrors((prev) => ({
      ...prev,
      [name]: value === "",
    }));
  };

  // Function to handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing the default form submission behavior.

    // Check if any required fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      // Making an HTTP POST request to send an email.
      const response = await axios.post(
        "/.netlify/functions/send-email", // The URL endpoint for the serverless function.
        formData
      );
      // Post to express server: const response = await axios.post("/api/contact/send-email", formData);

      // Handling the response from the server.
      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" });
        setSuccessMessage("Thank you! We'll get back to you shortly.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
        setErrorMessage("");
        // Incrementing the form key to force re-render and clear form values.
        setFormKey((prevKey) => prevKey + 1);
      } else {
        console.error("Error sending email");
        // Setting an error message if the email couldn't be sent.
        setErrorMessage("Error sending email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handling any unexpected errors during the form submission.
      setErrorMessage("Error sending email. Please try again.");
    }
  };

  // Function to handle changes in the form fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle changes in the email field, including validation.
  const handleEmailChange = (e) => {
    handleChange(e);

    // Email validation using a simple regex pattern.
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
          {/* Input fields for name, email, and message */}
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
          {/* Submit button */}
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
