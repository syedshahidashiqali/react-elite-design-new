import "./index.scss";
import { Col, Form, FloatingLabel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

export default function CouponForm() {
  return (
    <div className="couponFormWrapper">
      <Form>
        <Col md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faUser} color="#fff" />
            </div>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </div>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faPhone} color="#fff" />
            </div>
            <Form.Control type="text" placeholder="Phone no" />
          </Form.Group>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <FloatingLabel label="To help us understand better">
            <Form.Control
              as="textarea"
              placeholder="Describe in detail"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Button className="my-3">Activate your coupon</Button>
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
