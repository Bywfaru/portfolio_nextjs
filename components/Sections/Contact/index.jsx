import { useState } from "react";
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

    const handleSubmit = (event) => {
        event.preventDefault();
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
                className={styles.contactForm}
                onSubmit={handleSubmit}
                netlify-honeypot={"bot-field"}
                data-netlify={"true"}
                data-netlify-recaptcha="true"
            >
                <div style={{ position: "absolute", zIndex: -1 }}>
                    <input name={"bot-field"} required={false} />
                </div>

                <input
                    type="text"
                    name={"name"}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={"Name"}
                />

                <input
                    type="text"
                    name={"contactInfo"}
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder={"Email/Phone"}
                />

                <input
                    type="text"
                    name={"subject"}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={"Subject"}
                />

                <textarea
                    name={"message"}
                    onChange={handleChange}
                    value={formData.message}
                    placeholder={"Your message..."}
                    rows={5}
                />

                <div data-netlify-recaptcha="true"></div>

                <button type={"submit"}>Send</button>
            </form>
        </section>
    );
};

export default Contact;
