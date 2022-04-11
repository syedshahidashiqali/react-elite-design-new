import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import ListItem from "./ListItem";
import ComboBanner from "./ComboBanner";
import RotLine from "../RotLine";

function AllInOne() {
  return (
    <div className={styles.allInOneMainWrapper}>
      <Container>
        <Row>
          <Col lg={7} xs={12}>
            <div className={styles.leftSideWrapper}>
              <h5>All in one</h5>
              <h3>COMBO</h3>
              <p>
                Suitable for potential super-startups and brand revamps for
                companies
              </p>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div className={styles.packageListWrapper}>
                    <ul className={styles.packageList}>
                      <ListItem text="Unlimited Logo Design Concepts" />
                      <ListItem text="+ Social Media Design" />
                      <ListItem text="Mobile Responsive" />
                      <ListItem text="3 Dedicated Designers" />
                      <ListItem text="Icon Design" />
                      <ListItem text="Business Card, Letterhead, Envelope" />
                      <ListItem text="MS Word Letterhead" />
                      <ListItem text="UNLIMITED Pages Website" />
                      <ListItem text="Content Management System (CMS)" />
                      <ListItem text="5 Stock Photos + 3 Banner Designs" />
                      <ListItem text="Complete W3C Certified HTML" />
                      <ListItem text="Complete Deployment" />
                    </ul>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div className={styles.packageListWrapper}>
                    <ul className={styles.packageList}>
                      <ListItem text="Facebook Page Design" />
                      <ListItem text="Twitter Page Design" />
                      <ListItem text="YouTube Page Design" />
                      <ListItem text="All Final File Formats" />
                      <ListItem text="Dedicated Account Manager" />
                      <ListItem text="100% Satisfaction Guarantee" />
                      <ListItem text="100% Unique Design Guarantee" />
                      <ListItem text="100% Money Back Guarantee *" />
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={5} xs={12}>
            <ComboBanner />
          </Col>
        </Row>
        <RotLine
          stylesfromProps1={{ bottom: "-3rem", left: "3%" }}
          stylesfromProps2={{ width: "120px", height: "120px" }}
        />
      </Container>
    </div>
  );
}

export default AllInOne;
