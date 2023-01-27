import styles from "@/styles/pages/projects/Tekken7Homepage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import tekken7Wallpaper from "@/public/assets/images/tekken7/tekken7_wallpaper.jpg";
import { CustomInput } from "@/components";

const Tekken7Homepage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const toggleIsLogin = () => setIsLogin(!isLogin);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "username": {
        if (value.match(/[^0-9a-zA-Z]/g)) return;

        setUsername(value);
        break;
      }
      case "password": {
        if (
          value.match(/[^0-9a-zA-Z!@#$%^&*()_+-=?\/<>,.\\`~]/g) &&
          value !== ""
        ) {
          return;
        }

        setPassword(value);
        break;
      }
    }
  };

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
          <h2 className={styles.subHeading}>Stats and Combo Database</h2>
        </div>

        <div className={`${styles.vStack}  ${styles.ctaButtonContainer}`}>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <CustomInput
              type={"text"}
              label={"Username"}
              name={"username"}
              value={username}
              onChange={handleInputChange}
              required
            />

            <CustomInput
              type={"password"}
              label={"Password"}
              name={"password"}
              value={password}
              onChange={handleInputChange}
              required
            />

            <button
              type={"submit"}
              className={styles.signUpButton}
            >
              {isLogin ? "LOGIN" : "SIGN UP"}
            </button>
          </form>

          <a
            className={styles.loginButton}
            onClick={toggleIsLogin}
          >
            {isLogin
              ? "Don't have an account yet? Sign up"
              : "Already a member? Login"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tekken7Homepage;
