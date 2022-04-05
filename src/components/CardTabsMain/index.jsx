import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import styles from "./index.module.css";
import CardBox from "../CardBox";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonMain from "../ButtonMain";
function CardTabsMain() {
  const [key, setKey] = useState("home");

  return (
    <div className={styles.mainTabs}>
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Website Packages">
            <Row>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Essential"
                  price="$499"
                  delPrice="$1250.00"
                  iconImg={icon1}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 3 Page
                    Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 2 Stock
                    Images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Contact/Query Form
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Team"
                  price="$199"
                  delPrice="$500.00"
                  iconImg={icon2}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 5 Page
                    Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 5 Stock
                    Photos
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 3 Banner
                    Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    FREE Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    CMS will be Additional $250*
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Corporate"
                  price="$699"
                  delPrice="$1750.00"
                  iconImg={icon3}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    10 Unique Pages Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    CMS Integration
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom WordPress Backend
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 8 Stock
                    images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 5 Banner
                    Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    FREE Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                </CardBox>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Business"
                  price="$1299.00"
                  delPrice="$3250.00"
                  iconImg={icon1}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Striking Hover Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />{" "}
                    Newsletter Subscription (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> News Feed
                    Integration
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Social Media Integration
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />8 Stock
                    Photos
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />3 Unique
                    Banner Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Enterprise"
                  price="$1999.00"
                  delPrice="$5000.00"
                  iconImg={icon2}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Unlimited
                    Pages Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Custom WP
                    (or) Custom PHP Development
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Up to 8
                    Custom Made Banner Designs
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    12 Stock Images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Unlimited Revisions
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Special Hover Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Multi Lingual (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom Dynamic Forms (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Signup Area (For Newsletters, Offers etc.)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Easy Search Bar
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Free Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Search Engine Submission
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Elite"
                  price="$2499.00"
                  delPrice="$6250.00"
                  iconImg={icon3}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Unlimited Pages Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom Made, Interactive, Dynamic & High End Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom WP (or) Custom PHP Development
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Up to 12
                    Custom Made Banner Designs
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 14 Stock
                    Images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Unlimited Revisions
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Special Hover Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Content Management System (CMS) or Custom Dashboard PHP
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Online Appointment/Scheduling/Online Ordering Integration
                    (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Online Payment Integration (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Multi Lingual (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom Dynamic Forms (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Signup Area (For Newsletters, Offers etc.)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Easy Search Bar
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Live Feeds of Social Networks integration (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Mobile Responsive (All Devices Compatible)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    FREE 5 Years Domain Name
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Free Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Search Engine Submission
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    15 Seconds 2D Explainer Video
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Voice - Over & Sound Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Professional Script Writing
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Storyboard
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    SEO Meta Tags
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Industry Specified Team of Expert Designers and Developers
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Dedicated Accounts Manager
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Ownership Rights
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                </CardBox>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="E-Commerce Packages">
            <Row>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Essential"
                  price="$499"
                  delPrice="$1250.00"
                  iconImg={icon1}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 3 Page
                    Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 2 Stock
                    Images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Contact/Query Form
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Team"
                  price="$199"
                  delPrice="$500.00"
                  iconImg={icon2}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 5 Page
                    Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 5 Stock
                    Photos
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 3 Banner
                    Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    FREE Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    CMS will be Additional $250*
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Corporate"
                  price="$699"
                  delPrice="$1750.00"
                  iconImg={icon3}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    10 Unique Pages Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    CMS Integration
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom WordPress Backend
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 8 Stock
                    images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 5 Banner
                    Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    FREE Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                </CardBox>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Business"
                  price="$1299.00"
                  delPrice="$3250.00"
                  iconImg={icon1}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Striking Hover Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />{" "}
                    Newsletter Subscription (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> News Feed
                    Integration
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Social Media Integration
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />8 Stock
                    Photos
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />3 Unique
                    Banner Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    48 to 72 hours TAT
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Enterprise"
                  price="$1999.00"
                  delPrice="$5000.00"
                  iconImg={icon2}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Unlimited
                    Pages Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Custom WP
                    (or) Custom PHP Development
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Up to 8
                    Custom Made Banner Designs
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    12 Stock Images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Unlimited Revisions
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Special Hover Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Multi Lingual (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom Dynamic Forms (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Signup Area (For Newsletters, Offers etc.)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Easy Search Bar
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Free Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Search Engine Submission
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                </CardBox>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <CardBox
                  ribbonTitle="Elite"
                  price="$2499.00"
                  delPrice="$6250.00"
                  iconImg={icon3}
                >
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Unlimited Pages Website
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom Made, Interactive, Dynamic & High End Design
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom WP (or) Custom PHP Development
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 1 jQuery
                    Slider Banner
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> Up to 12
                    Custom Made Banner Designs
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" /> 14 Stock
                    Images
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Unlimited Revisions
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Special Hover Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Content Management System (CMS) or Custom Dashboard PHP
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Online Appointment/Scheduling/Online Ordering Integration
                    (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Online Payment Integration (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Multi Lingual (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Custom Dynamic Forms (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Signup Area (For Newsletters, Offers etc.)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Easy Search Bar
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Live Feeds of Social Networks integration (Optional)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Mobile Responsive (All Devices Compatible)
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    FREE 5 Years Domain Name
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Free Google Friendly Sitemap
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Search Engine Submission
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    15 Seconds 2D Explainer Video
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Voice - Over & Sound Effects
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Professional Script Writing
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Storyboard
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    SEO Meta Tags
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Industry Specified Team of Expert Designers and Developers
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Complete Deployment
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    Dedicated Accounts Manager
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Ownership Rights
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Satisfaction Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Unique Design Guarantee
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} color="#f80145" />
                    100% Money Back Guarantee *
                  </li>
                </CardBox>
              </Col>
            </Row>
          </Tab>
        </Tabs>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <ButtonMain text="LET'S GET STARTED" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardTabsMain;
