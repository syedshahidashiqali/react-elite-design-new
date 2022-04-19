import styles from "./index.module.css";
import experianceimg from "../../images/stats.webp";
import { Container, Row, Col } from "react-bootstrap";

function Experiance() {
  return (
    <div className={styles.experiance}>
      <Container>
        <Row>
          <Col md={3} sm={12} xs={12}>
            <div className={styles.experiancetext}>
              <span>
                Over 10 Years of Experience in the Website Design Industry
              </span>
            </div>
          </Col>
          <Col md={9} sm={12} xs={12}>
            <div className={styles.experiancafterimg}>
              <img
                src={experianceimg}
                alt="Banner Image"
                className="img-fluid"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experiance;
