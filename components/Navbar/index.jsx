import styles from "./Navbar.module.scss";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navBarIconBtnOnClickHandler = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.mobile}>
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
          style={{
            top: isOpen ? "0" : "-200vh",
          }}
        >
          <a
            href="#home"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            Home
          </a>
          <a
            href="#about"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            Who am I?
          </a>
          <a
            href="#skills"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            Projects
          </a>
          <a
            href="#education"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            Education
          </a>
          <a
            href="#contact"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            Contact
          </a>
        </div>
      </div>

      <div className={styles.desktop}>
        <div className={styles.navbarItems}>
          <a
            href="#home"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            <div className={styles.navbarItemContainer}>
              <span>Home</span>
              <div className={styles.navbarItemHoverLine}></div>
            </div>
          </a>
          <a
            href="#home"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            <div className={styles.navbarItemContainer}>
              <span>Who Am I?</span>
              <div className={styles.navbarItemHoverLine}></div>
            </div>
          </a>
          <a
            href="#home"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            <div className={styles.navbarItemContainer}>
              <span>Skills</span>
              <div className={styles.navbarItemHoverLine}></div>
            </div>
          </a>
          <a
            href="#home"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            <div className={styles.navbarItemContainer}>
              <span>Projects</span>
              <div className={styles.navbarItemHoverLine}></div>
            </div>
          </a>
          <a
            href="#home"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            <div className={styles.navbarItemContainer}>
              <span>Education</span>
              <div className={styles.navbarItemHoverLine}></div>
            </div>
          </a>
          <a
            href="#home"
            className={styles.navbarItem}
            onClick={navBarIconBtnOnClickHandler}
          >
            <div className={styles.navbarItemContainer}>
              <span>Contact</span>
              <div className={styles.navbarItemHoverLine}></div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
