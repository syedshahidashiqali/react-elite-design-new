import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import TabCom from "./TabComp";
import RotDotWhite from "../RotDotWhite";

function Transform() {
  return (
    <div className={styles.transformMainWrapper}>
      <Container>
        <Row>
          <div className={styles.colWrapper}>
            <Col lg={10} sm={10} xs={12}>
              <div className={styles.textWrapper}>
                <h2>TRANSFORMING YOUR PRESENCE</h2>
                <h4>
                  Be It Budding Startups Or Established Enterprises, We Create
                  <br />
                  Fascinating For Everyone
                </h4>
                <p>
                  We have streamlined our processes to achieve beautiful
                  designs, smooth development and impactful results in the most
                  effective manner. We take our work seriously and do not miss
                  out on deadlines and maintain a 100% satisfaction ratio for
                  our clients.
                </p>
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <TabCom />
        </Row>
        <RotDotWhite
          stylesfromProps1={{ top: "10%", left: "3%" }}
          stylesfromProps2={{ width: "80px", height: "80px" }}
        />
      </Container>
    </div>
  );
}

export default Transform;
