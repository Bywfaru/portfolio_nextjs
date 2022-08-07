import styles from "./Footer.module.scss";
import socialMedia from "configs/social_media.json";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            {socialMedia.map((socialMedia, index) => (
                <a
                    key={index}
                    href={socialMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.logoContainer}>
                        <Image
                            src={socialMedia.logo}
                            width={25}
                            height={25}
                            alt={`${socialMedia.name} logo`}
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Footer;
