import styles from "./index.module.css";

const ButtonMain = ({ text, setShow }) => {
  return (
    <div className="BtnCenter">
      <button
        className={`${styles.mybtn} ${styles.butnnew} ${styles.butn}`}
        onClick={() => setShow(true)}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonMain;
