import "./index.scss";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TabItem from "./TabItem";
import icon1 from "../../images/svg/icon1.svg";
import icon2 from "../../images/svg/icon2.svg";
import icon3 from "../../images/svg/icon3.svg";
import icon4 from "../../images/svg/icon4.svg";

function WebDesIndustry() {
  return (
    <div className="webDesignMainWrapper">
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="headingTextWrapper">
              <h5>Web Design Industry</h5>
              <p>
                If you are on the lookout for a website that aligns with your
                business and connects with the customers at the same time, you
                have come to the right platform. Take our word for it Elite
                Design Hub website solutions are up a notch from what other
                digital agencies have to offer! results.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Tab.Container defaultActiveKey="custom">
            <Row>
              <Col lg={3}>
                <div className="serviceTabWrapper">
                  <Nav variant="pills" className="flex-column">
                    <TabItem
                      eventKey="custom"
                      img={icon1}
                      normText="CUSTOM"
                      boldText="WEBSITE"
                    />
                    <TabItem
                      eventKey="content"
                      img={icon2}
                      normText="CONTENT"
                      boldText="MANAGEMENT SYSTEM"
                    />
                    <TabItem
                      eventKey="ecommerce"
                      img={icon3}
                      normText="E-COMMERCE"
                      boldText="DESIGN"
                    />
                    <TabItem
                      eventKey="static"
                      img={icon4}
                      normText="STATIC WEBSITE"
                      boldText="DESIGN"
                    />
                  </Nav>
                </div>
              </Col>
              <Col lg={9}>
                <div className="serviceTabContentWrapper">
                  <Tab.Content>
                    <Tab.Pane eventKey="custom"></Tab.Pane>
                    <Tab.Pane eventKey="content"></Tab.Pane>
                    <Tab.Pane eventKey="ecommerce"></Tab.Pane>
                    <Tab.Pane eventKey="static"></Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
      </Container>
    </div>
  );
}

export default WebDesIndustry;
