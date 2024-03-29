import { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import homeStyles from "@/styles/pages/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import { Anchor } from "../../";

const DEFAULT_FORM_DATA = {
  name: "",
  contactInfo: "",
  subject: "",
  message: "",
  botField: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }
  }, [submitted]);

  const handleSubmit = (event) => {
    if (formData.botField.length) event.preventDefault();

    setSubmitted(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getButtonIsDisabled = () => {
    const hasEmptyFields = Object.values(formData).filter((value, index) => {
      if (Object.keys(formData)[index] === "botField") {
        return false;
      }

      return !value.length;
    });

    return submitted || hasEmptyFields.length;
  };

  return (
    <section className={sectionsStyles.container}>
      <Anchor name={"contact"} />

      <h1 className={homeStyles.heading}>Let&apos;s get in touch :)</h1>

      <form
        className={styles.contactForm}
        onSubmit={handleSubmit}
        action={"https://api.web3forms.com/submit"}
        method={"POST"}
      >
        <input
          type={"hidden"}
          name={"access_key"}
          value={"6fd50934-e515-479f-a4a6-8e6d02f1523c"}
        />

        <div style={{ position: "absolute", zIndex: -1 }}>
          <input
            name={"botField"}
            onChange={handleChange}
            value={formData.botField}
          />
        </div>

        <input
          type="text"
          name={"name"}
          value={formData.name}
          onChange={handleChange}
          placeholder={"Name"}
          required
        />

        <input
          type="text"
          name={"contactInfo"}
          value={formData.contactInfo}
          onChange={handleChange}
          required
          placeholder={"Email/Phone"}
        />

        <input
          type="text"
          name={"subject"}
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder={"Subject"}
        />

        <textarea
          name={"message"}
          onChange={handleChange}
          value={formData.message}
          placeholder={"Your message..."}
          required
          rows={5}
        />

        {/* <div data-netlify-recaptcha="true"></div> */}

        <button
          type={"submit"}
          disabled={getButtonIsDisabled()}
        >
          {submitted ? "Submitted!" : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
