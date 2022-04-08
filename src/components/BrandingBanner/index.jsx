import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Flip } from "react-reveal";
import { useRef } from "react";
import { useIntersection } from "../../customHooks/useIntersection";

function BrandingBanner() {
  const ref = useRef();
  const inViewport = useIntersection(ref, "0px");

  return (
    <div className={styles.brandingBannerWrapper}>
      <Container>
        <Row className="d-flex jc-c text-center">
          <Col lg={7} sm={12} xs={12} ref={ref}>
            <Flip bottom collapse when={inViewport} duration={1200}>
              <div className={styles.textWrapper}>
                <h5>WE IGNITE YOUR GROWTH BEYOND MEASURE</h5>
                <h3>LET YOUR BRANDING SPEAK FOR YOU</h3>
                <ul className={styles.list}>
                  <li>
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
                      <span>LIVE CHAT</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Flip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BrandingBanner;
