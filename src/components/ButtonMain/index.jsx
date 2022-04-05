import styles from "./index.module.css";

const ButtonMain = ({ text }) => {
  return (
    <div className="BtnCenter">
      <button className={`${styles.mybtn} ${styles.butnnew} ${styles.butn}`}>
        {text}
      </button>
    </div>
  );
};

export default ButtonMain;
