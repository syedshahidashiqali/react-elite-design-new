import "./index.scss";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComments } from "@fortawesome/free-solid-svg-icons";

function TabContentItem({ head, para, imgs }) {
  return (
    <div className="tabContentItemWrapper">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="serviceTabContentTextWrapper">
            <h3>{head}</h3>
            <p>{para}</p>
          </div>
        </Col>
      </Row>
      <div className="tabContentImgsWrapper mt-5">
        <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <img className="img-fluid" src={imgs[0]} alt="service 1" />
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <img className="img-fluid" src={imgs[1]} alt="service 2" />
          </Col>
        </Row>
      </div>
      <div className="tabContentBtnsWrapper mt-5">
        <button className="tabContentFirstBtn">Learn More</button>
        <a href="">
          <span className="d-flex ai-c">
            Click here to
            <FontAwesomeIcon
              icon={faComments}
              color="#ff0042"
              fontSize={16}
              className="ms-2"
            />
          </span>
          <h3>Live Chat</h3>
        </a>
        <a href="">
          <span className="d-flex ai-c">
            Call Us At
            <FontAwesomeIcon
              icon={faPhone}
              color="#ff0042"
              fontSize={16}
              className="ms-2"
            />
          </span>
          <h3>254-274-5646</h3>
        </a>
        <button className="tabContentLasttBtn">Order Now</button>
      </div>
    </div>
  );
}

export default TabContentItem;
