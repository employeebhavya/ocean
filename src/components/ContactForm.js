"use client";

import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className={styles.formContainer}>
      <h2 className="h2">Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.fieldGroup}>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textareaField}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {submitted && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <p
              style={{ color: "green", fontWeight: "bold" }}
              className="description"
            >
              Thank you! Your form has been submitted successfully.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
