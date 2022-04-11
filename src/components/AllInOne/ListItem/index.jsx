import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({ text }) {
  return (
    <li className={styles.packageListItem}>
      <FontAwesomeIcon icon={faArrowCircleRight} />
      <span>{text}</span>
    </li>
  );
}
