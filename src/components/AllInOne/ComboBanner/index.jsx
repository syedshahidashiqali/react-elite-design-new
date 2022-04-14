import styles from "./index.module.scss";
import { Button } from "react-bootstrap";
import RotDot from "../../RotDot";

export default function ComboBanner({ setShow, setData }) {
  return (
    <div
      className={styles.comboBannerMainWrapper}
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>Combo Packages</h3>
          <p>Complete Branding Solution</p>
        </div>
        <div className={styles.price}>
          <div>
            <h3>$999</h3>
          </div>
          <div>
            <h6>
              <del>$1798</del> Only
            </h6>
          </div>
        </div>
      </div>
      <div className={styles.offNow}>
        <h6>
          <span>20% OFF</span> Next Order
        </h6>
      </div>
      <div className={styles.details}>
        <ul>
          <li>
            <a href="tel:+15122715131">
              <span>Speak with us</span>
              +15122715131
            </a>
          </li>
          <li>
            <a href="tel:+15122715131">
              <span>Want to discuss?</span>
              Live Chat Now
            </a>
          </li>
        </ul>
        <div className={styles.btnWrapper}>
          <Button
            onClick={() => {
              setData({ package: "Combo Packages", price: 999 });
              setShow(true);
            }}
          >
            START PROJECT
          </Button>
        </div>
      </div>
      <RotDot
        stylesfromProps1={{
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
        }}
        stylesfromProps2={{ width: "60px", height: "60px" }}
      />
    </div>
  );
}
