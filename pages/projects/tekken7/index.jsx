import { CustomInput } from "@/components";
import tekken7Wallpaper from "@/public/assets/images/tekken7/tekken7_wallpaper.jpg";
import styles from "@/styles/pages/projects/Tekken7Homepage.module.scss";
import Image from "next/image";
import { useState } from "react";

const Tekken7Homepage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const toggleIsLogin = () => setIsLogin(!isLogin);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("formData:", formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "username": {
        if (value.match(/[^0-9a-zA-Z]/g)) return;

        break;
      }
      case "password": {
        if (
          value.match(/[^0-9a-zA-Z!@#$%^&*()_+-=?\/<>,.\\`~]/g) &&
          value !== ""
        ) {
          return;
        }
        break;
      }
    }

    setFormData({ ...formData, [name]: value });
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
              value={formData.username}
              onChange={handleInputChange}
              required
            />

            <CustomInput
              type={"password"}
              label={"Password"}
              name={"password"}
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            {!isLogin && (
              <CustomInput
                type={"password"}
                label={"Confirm Password"}
                name={"confirmPassword"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            )}

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
