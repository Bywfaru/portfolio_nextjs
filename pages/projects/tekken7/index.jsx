import styles from "@/styles/pages/projects/Tekken7Homepage.module.scss";
import Link from "next/link";

const Tekken7Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>Tekken 7</h1>
      <h2>Stats and Combos</h2>
      <button>Sign up</button>
      <Link href={"/projects/tekken7/login"}>Login</Link>
    </div>
  );
};

export default Tekken7Homepage;
