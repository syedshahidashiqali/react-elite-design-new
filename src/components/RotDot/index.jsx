import styles from "./index.module.scss";
import rotImg1 from "../../images/growRotImg.png";

const RotDot = ({ stylesfromProps1, stylesfromProps2 }) => {
  return (
    <div className={styles.rotImgWrapper} style={stylesfromProps1}>
      <img
        className="img-fluid"
        src={rotImg1}
        alt="rotating img"
        style={stylesfromProps2}
      />
    </div>
  );
};

export default RotDot;