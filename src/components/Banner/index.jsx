import styles from "./index.module.scss";
import bannerimg from "../../images/web1.webp";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import axios from "axios";

function Banner({ setChatShow }) {
  const usernameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = usernameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;

    await axios
      .post(
        "https://test-urls.com/elitedesignhub/elite-design-api/public/api/email-form-submit",
        {
          name,
          phone,
          email,
        }
      )
      .then((res) => console.log(52, res.data.message));
  };
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
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    ref={usernameRef}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                  <Form.Control
                    type="text"
                    placeholder="Your Phone Number"
                    ref={phoneRef}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your Email Address"
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <div className={styles.mybtn}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="primary" onClick={setChatShow}>
                    Chat with Us
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={5} sm={12} xs={12}>
            <div className={styles.bannerimg}>
              <img src={bannerimg} alt="Banner Image" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
