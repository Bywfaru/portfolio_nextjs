import { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";

const DEFAULT_FORM_DATA = {
    name: "",
    contactInfo: "",
    subject: "",
    message: "",
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
        setSubmitted(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <section id={"contact"} className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Contact</h1>

            <form
                name={"contactForm"}
                className={styles.contactForm}
                onSubmit={handleSubmit}
                netlify-honeypot={"bot-field"}
                data-netlify={"true"}
                method={"POST"}
                action={""}
            >
                <input type="hidden" name="form-name" value="contactForm" />
                <div style={{ position: "absolute", zIndex: -1 }}>
                    <input name={"bot-field"} />
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

                <button type={"submit"} disabled={submitted}>
                    {submitted ? "Submitted!" : "Send"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
