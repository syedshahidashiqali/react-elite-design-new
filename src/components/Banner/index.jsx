import styles from "./index.module.scss";
import bannerimg from "../../images/web1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Banner({ setShow }) {
  return (
    <div className={styles.mainbanner}>
      <Container>
        <Row>
          <Col md={7} sm={12} xs={12}>
            <div className={styles.BannerText}>
              <span data-aos="fade-up" data-aos-duration="1200">
                Website Design Services
              </span>
              <p data-aos="fade-up" data-aos-duration="1700">
                We Designed Websites that maximize your ROI At Elite Design Hub,
                our website design and development experts create websites
                leading to a sublime user experience
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
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => setShow(true)}
                  >
                    Chat with Us
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={5} sm={12} xs={12}>
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
