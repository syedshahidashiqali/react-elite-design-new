import "./index.scss";
import { Nav, Col } from "react-bootstrap";

function TabItem({ eventKey, img, text1, text2 }) {
  return (
    <Col lg={3} md={3} sm={6} xs={6}>
      <Nav.Item>
        <Nav.Link eventKey={eventKey}>
          <div className="transformTabInnerWrapper">
            <img src={img} alt="icon" />
            <span>
              {text1} <br /> {text2}
            </span>
          </div>
        </Nav.Link>
      </Nav.Item>
    </Col>
  );
}

export default TabItem;
