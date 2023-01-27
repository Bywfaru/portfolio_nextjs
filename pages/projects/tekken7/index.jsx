import styles from "@/styles/pages/projects/Tekken7Homepage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import tekken7Wallpaper from "@/public/assets/images/tekken7/tekken7_wallpaper.jpg";

const Tekken7Homepage = () => {
  return (
    <div className={styles.container}>
      <Image
        src={tekken7Wallpaper}
        alt={""}
        fill
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div className={styles.loginContainer}>
        <div className={styles.vStack}>
          <h1 className={styles.heading}>Tekken 7</h1>
          <h2 className={styles.subHeading}>Stats and Combos</h2>
        </div>

        <div className={`${styles.vStack}  ${styles.ctaButtonContainer}`}>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <label className={styles.inputLabel}>Username</label>
              <input type={"text"} />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputLabel}>Password</label>
              <input type={"password"} />
            </div>
          </form>

          <button className={styles.signUpButton}>SIGN UP</button>
          <Link
            href={"/projects/tekken7/login"}
            className={styles.loginButton}
          >
            Already a member? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tekken7Homepage;
