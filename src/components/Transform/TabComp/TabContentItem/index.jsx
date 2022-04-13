import "./index.scss";
import { Row, Col } from "react-bootstrap";
import ButtonMain from "../../../ButtonMain";

function TabContentItem({ head, para, img }) {
  return (
    <div className="transformTabContentWrapper">
      <Row>
        <Col lg={5} md={12} sm={12} xs={12}>
          <div
            className="transformTabContentTextWrapper"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h3>{head}</h3>
            <p>{para}</p>
            <ButtonMain text="LET'S GET STARTED" />
          </div>
        </Col>
        <Col lg={7} md={12} sm={12} xs={12}>
          <div
            className="transformTabContentImgWrapper"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img className="img-fluid" src={img} alt="icon" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TabContentItem;
