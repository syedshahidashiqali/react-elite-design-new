import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../../../images/footerLogo.png";
import footerImg from "../../../images/footerPartners.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function FooterTop() {
  return (
    <div className={styles.footerTopMainWrapper}>
      <Container>
        <Row>
          <Col md={2} sm={2} xs={6}>
            <div className={styles.footerLogoWrapper}>
              <img className="img-fluid" src={footerLogo} alt="footer logo" />
            </div>
          </Col>
          <Col md={5} sm={5} xs={5}>
            <div className={styles.socialIconsWrapper}>
              <span>
                <a href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </span>
              <span>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </span>
              <span>
                <a href="">
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </span>
              <span>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </span>
            </div>
          </Col>
          <Col md={5} sm={5} xs={6}>
            <div className={styles.textWrapper}>
              <p>
                <FontAwesomeIcon icon={faStar} color="#f8b820" />
                <FontAwesomeIcon icon={faStar} color="#f8b820" />
                <FontAwesomeIcon icon={faStar} color="#f8b820" />
                <FontAwesomeIcon icon={faStar} color="#f8b820" />
                <FontAwesomeIcon icon={faStar} color="#f8b820" />
                Rated 4.9/5.0 by 300+ clients for Design and Marketing Services
                on various platforms.
              </p>
              <img className="img-fluid" src={footerImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterTop;
