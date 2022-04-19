import "./index.scss";
import { Row, Tab, Nav } from "react-bootstrap";
import TabItem from "./TabItem";
import icon1 from "../../../images/tabIcon1.webp";
import icon2 from "../../../images/tabIcon2.webp";
import icon3 from "../../../images/tabIcon3.webp";
import icon4 from "../../../images/tabIcon4.webp";
import TabContentItem from "./TabContentItem";

import img1 from "../../../images/tabimg1.webp";
import img2 from "../../../images/tabimg2.webp";
import img3 from "../../../images/tabimg3.webp";
import img4 from "../../../images/tabimg4.webp";

function TabCom({ setShow }) {
  return (
    <div className="transformMainTabsWrapper">
      <Tab.Container defaultActiveKey="brief">
        <div
          className="transformServiceTabWrapper"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <Nav variant="pills">
            <Row>
              <TabItem
                eventKey="brief"
                img={icon1}
                text1="CREATIVE"
                text2="BRIEF"
              />
              <TabItem
                eventKey="concepts"
                img={icon2}
                text1="INITIAL"
                text2="CONCEPTS"
              />
              <TabItem
                eventKey="revisions"
                img={icon3}
                text1="FEEDBACK /"
                text2="REVISION"
              />
              <TabItem
                eventKey="delivery"
                img={icon4}
                text1="FINAL"
                text2="DELIVERY"
              />
            </Row>
          </Nav>
        </div>
        <div className="transformServiceTabContentWrapper">
          <Tab.Content>
            <Tab.Pane eventKey="brief">
              <TabContentItem
                setShow={setShow}
                head="WEBSITE BRIEF"
                para="We begin the process by identifying the requirements and goals 
                of the website. A review is then done on analytics and research which helps 
                our content strategy and site design. Our project managers then create 
                Wireframes for all templates."
                img={img1}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="concepts">
              <TabContentItem
                setShow={setShow}
                head="WEBSITE DESIGN"
                para="Our design process begins by exploring many creative trends. During a series 
                of review rounds, the selected design is then optimized and applied to templates."
                img={img2}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="revisions">
              <TabContentItem
                setShow={setShow}
                head="WEBSITE DEVELOPMENT"
                para="Website Development starts on a secure server where you can see the progress in real 
                ]time. Following the agreement on the final design/development."
                img={img3}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="delivery">
              <TabContentItem
                setShow={setShow}
                head="FINALIZATION & DEPLOYMENT"
                para="Q/A & rigorous testing is done on beta servers, the website is deployed and ready 
                for business. Our commitment does not end once your website is live and launched, we 
                remain on support for a pre-set time with the client."
                img={img4}
              />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}

export default TabCom;
