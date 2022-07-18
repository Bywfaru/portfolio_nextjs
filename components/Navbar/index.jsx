import styles from "./Navbar.module.scss";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navBarIconBtnOnClickHandler = () => setIsOpen(!isOpen);

    return (
        <>
            <div className={styles.container}>
                <div onClick={navBarIconBtnOnClickHandler}>
                    {isOpen ? (
                        <IoMdClose className={styles.navbarIconBtn} />
                    ) : (
                        <IoMdMenu className={styles.navbarIconBtn} />
                    )}
                </div>
            </div>

            <div
                className={styles.navbarItems}
                style={{ top: isOpen ? "0" : "-100vh" }}
            >
                <span className={styles.navbarItem}>Home</span>
                <span className={styles.navbarItem}>Who am I?</span>
                <span className={styles.navbarItem}>Skills</span>
                <span className={styles.navbarItem}>Projects</span>
                <span className={styles.navbarItem}>Education</span>
                <span className={styles.navbarItem}>Contact</span>
            </div>
        </>
    );
};

export default Navbar;
