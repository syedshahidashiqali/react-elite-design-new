import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function FooterBot() {
  return (
    <div className={styles.footerBotMainWrapper}>
      <Container>
        <Row>
          <Col>
            <div className={styles.textWrapper}>
              <h4>© Copyright 2022 Elite Design Hub All rights reserved.</h4>
              <p>
                The logo, name and graphics of Logoz Lab and its products &amp;
                services are the trademarks of Logoz Lab. All other company
                names, brand names, trademarks and logos mentioned on this
                website are the property of their respective owners and do not
                constitute or imply endorsement, sponsorship or recommendation
                thereof by Logoz Lab and do not constitute or imply endorsement,
                sponsorship or recommendation of Logoz Lab by the respective
                trademark owner.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterBot;
