import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

function BrandingBanner({ setChatShow }) {
  return (
    <div className={styles.brandingBannerWrapper}>
      <Container>
        <Row className="d-flex jc-c text-center">
          <Col lg={7} sm={12} xs={12}>
            <div
              className={styles.textWrapper}
              data-aos="flip-down"
              data-aos-duration="1200"
            >
              <h5>WE IGNITE YOUR GROWTH BEYOND MEASURE</h5>
              <h3>LET YOUR BRANDING SPEAK FOR YOU</h3>
              <ul className={styles.list}>
                <li onClick={setChatShow}>
                  <a href="">
                    <FontAwesomeIcon icon={faMessage} color="#000" />
                    <span>LIVE CHAT</span>
                  </a>
                </li>
                <li>
                  <a href="">Request A Quote</a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faPhone} color="#000" />
                    <span>254-274-5646</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BrandingBanner;
