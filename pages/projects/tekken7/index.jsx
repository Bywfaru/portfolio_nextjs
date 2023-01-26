import styles from "@/styles/pages/projects/Tekken7Homepage.module.scss";
import Link from "next/link";
import { useState } from "react";

const Tekken7Homepage = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          height: "20px",
          width: "20px",
          background: "red",
          opacity: isShow ? 1 : 0,
          transition: "opacity 0s ease 2s",
        }}
      ></div>
      <h1>Tekken 7</h1>
      <h2>Stats and Combos</h2>
      <button onClick={handleClick}>Sign up</button>
      <Link href={"/projects/tekken7/login"}>Login</Link>
    </div>
  );
};

export default Tekken7Homepage;
