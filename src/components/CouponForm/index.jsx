import "./index.scss";
import { Col, Form, FloatingLabel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import axios from "axios";

export default function CouponForm({ data, setData }) {
  console.log(9, data);
  const usernameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = usernameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const url =
      "https://test-urls.com/elitedesignhub/elite-design-api/public/api/email-form-submit-with-package";

    const body = {
      name,
      phone,
      email,
      message,
      package_name: data?.package,
      package_price: parseFloat(data?.price).toFixed(2),
    };

    // console.log(32, body);
    await axios.post(url, body).then((res) => console.log(res.data.message));
  };
  return (
    <div className="couponFormWrapper">
      <Form onSubmit={submitHandler}>
        <Col md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faUser} color="#fff" />
            </div>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              ref={usernameRef}
              required
            />
          </Form.Group>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </div>
            <Form.Control
              type="email"
              placeholder="Email Address"
              ref={emailRef}
              required
            />
          </Form.Group>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faPhone} color="#fff" />
            </div>
            <Form.Control
              type="text"
              placeholder="Phone no"
              ref={phoneRef}
              required
            />
          </Form.Group>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <FloatingLabel label="To help us understand better">
            <Form.Control
              as="textarea"
              defaultValue={""}
              placeholder="Describe in detail"
              style={{ height: "100px" }}
              ref={messageRef}
            />
          </FloatingLabel>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Button className="my-3" type="submit">
            Activate your coupon
          </Button>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <span
            style={{
              color: "#333333",
              fontSize: "12px",
              fontWeight: 500,
              marginTop: "2px",
              textAlign: "left",
            }}
          >
            By clicking "Sign Up Free" I agree to Terms of Service.
          </span>
        </Col>
      </Form>
    </div>
  );
}
