import styles from './GetInTouchBtn.module.scss';

const GetInTouchBtn = () => {
  return (
    <a
      className={styles.btn}
      href="#contact"
    >
      <span className={styles.btnText}>Get in touch</span>
    </a>
  );
};

export default GetInTouchBtn;
