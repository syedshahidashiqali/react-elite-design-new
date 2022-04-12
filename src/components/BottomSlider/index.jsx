import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import img1 from "../../images/sliderImg1.png";
import img2 from "../../images/sliderImg2.png";
import img3 from "../../images/sliderImg3.png";
import img4 from "../../images/sliderImg4.png";
import img5 from "../../images/sliderImg5.png";
import img6 from "../../images/sliderImg6.png";

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
    padding: 10,
  };
  return (
    <div className="botSliderMainWrapper">
      <Container>
        <Row>
          <Col md={12}>
            <div className="sliderMainWrapper">
              <Slider {...settings}>
                {[0, 1, 2, 3, 4, 5].map((item, i) => (
                  <div className="sliderContent" key={i}>
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
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BotSlider;
