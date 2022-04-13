import { Container } from "react-bootstrap";
import styles from "./index.module.css";

function HeadingCenter({ headFirst, headSec, headThird }) {
  return (
    <Container>
      <div
        className={styles.headingCenter}
        data-aos="zoom-in-down"
        data-aos-duration="1700"
      >
        <small>{headFirst}</small>
        <span>{headSec}</span>
        {headThird && <p>{headThird}</p>}
      </div>
    </Container>
  );
}

export default HeadingCenter;
