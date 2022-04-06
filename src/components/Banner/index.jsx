import styles from "./index.module.css";
import bannerimg from "../../images/web1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Banner() {
  return (
    <div className={styles.mainbanner}>
      <Container>
        <Row>
          <Col md={7} sm={7} xs={12}>
            <div className={styles.BannerText}>
              <span>
                Website Design
                <br /> Services
              </span>
              <p>
                We Designed Websites that maximize your ROI At Elite Design Hub,
                our website design and development experts create websites
                leading to a sublime user experiencejhjh
              </p>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                  <Form.Control type="number" placeholder="Your Phone Number" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Your Email Address" />
                </Form.Group>
                <div className={styles.mybtn}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="primary" type="submit">
                    Chat with Us
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={5} sm={5} xs={12}>
            <div className={styles.bannerimg}>
              <img
                src={bannerimg}
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

export default Banner;
