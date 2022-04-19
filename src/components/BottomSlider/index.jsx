import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import img1 from "../../images/sliderImg1.webp";
import img2 from "../../images/sliderImg2.webp";
import img3 from "../../images/sliderImg3.webp";
import img4 from "../../images/sliderImg4.webp";
import img5 from "../../images/sliderImg5.webp";
import img6 from "../../images/sliderImg6.webp";
import prev from "../../images/arrow-prev.webp";
import next from "../../images/arrow-next.webp";

const imgs = [img1, img2, img3, img4, img5, img6];

function BotSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={imgs[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="botSliderMainWrapper">
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="sliderMainWrapper">
              <Slider {...settings}>
                <div className="sliderContent">
                  <h4>
                    Andrew Garcia
                    <strong>Brand Manager</strong>
                  </h4>
                  <p>
                    Elite Design Hub did a wonderful job designing and
                    developing a customized website for us. They infused
                    arresting visual elements that capture visitors’ attention
                    right away. Couldn’t ask for a better team to work with.
                  </p>
                </div>
                <div className="sliderContent">
                  <h4>
                    Johnathan Smith
                    <strong>Entrepreneur</strong>
                  </h4>
                  <p>
                    Excellent video animation services. The folks created a
                    striking video that conveyed our message in an engaging way.
                    The customer support team was approachable as well. Highly
                    recommended!
                  </p>
                </div>
                <div className="sliderContent">
                  <h4>
                    Hernandez
                    <strong>Businessperson</strong>
                  </h4>
                  <p>
                    Literally, I was blown away by Elite Design Hub’s expertise
                    in designing logos. Though I had a raw concept in my mind,
                    they refined it far beyond my expectations. Simply amazing.
                    Keep nailing it guys.
                  </p>
                </div>
                <div className="sliderContent">
                  <h4>Exceptional Work by the Logo Inifinix Team</h4>
                  <p>
                    We hired Elite Design Hub to boost your SEO. They kept us
                    posted about every single development through their
                    streamlined communication. 2 months down the line, our
                    search engine ranking improved big time and we started
                    getting an abundance of traffic.
                  </p>
                </div>
                <div className="sliderContent">
                  <h4>A wonderful experience and great service</h4>
                  <p>
                    After getting our website completely redesigned by these
                    folks, its functionality increased dramatically. It does not
                    take much to maintain our website now. Thanks, Elite Design
                    Hub.
                  </p>
                </div>
                <div className="sliderContent">
                  <h4>Truly remarkable!</h4>
                  <p>
                    Working with Elite Design Hub was an absolute pleasure. They
                    were way more superior than other agencies we had worked
                    with in the past. My real estate website is now appearing on
                    the 1st page of Google in local searches.
                  </p>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BotSlider;
