import "./index.scss";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TabItem from "./TabItem";
import icon1 from "../../images/svg/icon1.svg";
import icon2 from "../../images/svg/icon2.svg";
import icon3 from "../../images/svg/icon3.svg";
import icon4 from "../../images/svg/icon4.svg";
import TabContentItem from "./TabContentItem";
import web1Img from "../../images/website-1.webp";
import web2Img from "../../images/website-2.webp";
import web3Img from "../../images/website-3.webp";
import web4Img from "../../images/website-4.webp";
import web5Img from "../../images/website-5.webp";
import web6Img from "../../images/website-6.webp";
import web7Img from "../../images/website-7.webp";
import web8Img from "../../images/website-8.webp";

function WebDesIndustry() {
  return (
    <div className="webDesignMainWrapper">
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="headingTextWrapper">
              <h5 data-aos="fade-down">Web Design Industry</h5>
              <p data-aos="fade-up">
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
          <div className="mainTabsWrapper">
            <Tab.Container defaultActiveKey="custom">
              <Row>
                <Col lg={4} xl={3} md={12}>
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
                <Col lg={8} xl={9} md={12}>
                  <div className="serviceTabContentWrapper">
                    <Tab.Content>
                      <Tab.Pane eventKey="custom">
                        <TabContentItem
                          head="CUSTOM WEBSITE"
                          para="Do you want to enhance your sales and spice your marketing strategies on a website? 
                        Look no further. Our team of developers and designers has the ability and exposure to create an 
                        engaging and appealing website for any business. Our websites can be used for mobile devices 
                        without compromising on the user experience one bit. To ensure client satisfaction and maximum 
                        return on investment, we design customized, easy-to-use, and lead-generating websites."
                          imgs={[web1Img, web2Img]}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="content">
                        <TabContentItem
                          head="CMS – CONTENT MANAGEMENT SYSTEM"
                          para="Every business needs a strong Content Management System (CMS). CMS is essential for 
                        accurate and relevant information. We offer website development solutions for leading CMS 
                        platforms such as WordPress, Joomla, and Drupal."
                          imgs={[web3Img, web4Img]}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="ecommerce">
                        <TabContentItem
                          head="E-COMMERCE"
                          para="A well-designed E-commerce website is essential to the success of online stores. 
                        Contrary to the common assumption, a good design goes beyond just graphics and other 
                        aesthetic elements. A professional is required to provide the necessary information, 
                        brand enhancement, visibility of text, etc. to make a site user-friendly. Get the 
                        pitch-perfect website for your brand with our impeccable E-commerce web design and 
                        development service."
                          imgs={[web5Img, web6Img]}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="static">
                        <TabContentItem
                          head="STATIC WEBSITE DESIGN"
                          para="Elite Design Hub has the expertise to create a stunning static website. 
                        Our creative team will create a design that will appeal to your clients and keep 
                        them connected to your website for a long time. Rest assured, with our static website, 
                        you will be able to keep the bounce rate under control."
                          imgs={[web7Img, web8Img]}
                        />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default WebDesIndustry;
