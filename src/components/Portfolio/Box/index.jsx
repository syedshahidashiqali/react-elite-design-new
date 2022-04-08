import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

function Box({ src }) {
  return (
    <div className={styles.boxWrapper}>
      <img className="img-fluid" src={src} alt="portfolio" />
      <div className={styles.hoverEffects}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
        </div>
      </div>
    </div>
  );
}

export default Box;
