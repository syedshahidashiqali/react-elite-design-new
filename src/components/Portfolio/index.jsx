import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-reveal";
import { useRef, useState } from "react";
import { useIntersection } from "../../customHooks/useIntersection";
import small1 from "../../images/small1.webp";
import small2 from "../../images/small2.webp";
import small3 from "../../images/small3.webp";
import small4 from "../../images/small4.webp";
import small5 from "../../images/small5.webp";
import small6 from "../../images/small6.webp";
import small7 from "../../images/small7.webp";
import small8 from "../../images/small8.webp";
import small9 from "../../images/small9.webp";
import small10 from "../../images/small10.webp";
import small11 from "../../images/small11.webp";
import small12 from "../../images/small12.webp";
import Box from "./Box";
import ButtonMain from "../ButtonMain";
import FsLightbox from "fslightbox-react";

function Portfolio() {
  const images = [
    small1,
    small2,
    small3,
    small4,
    small5,
    small6,
    small7,
    small8,
    small9,
    small10,
    small11,
    small12,
  ];

  const ref = useRef();
  const inViewport = useIntersection(ref, "0px");

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  return (
    <div className={styles.portfolioMainWrapper}>
      <Container>
        <Row>
          <Col
            className="text-center"
            lg={12}
            md={12}
            sm={12}
            xs={12}
            ref={ref}
          >
            <Zoom bottom collapse when={inViewport} duration={1500}>
              <div className={styles.textWrapper}>
                <h4>Our Services For Startups</h4>
                <h5>SME & Entrepreneurs</h5>
              </div>
            </Zoom>
          </Col>
        </Row>
        <Row className="mt-5">
          {images.map((img, index) => (
            <Col
              lg={3}
              md={3}
              sm={6}
              xs={12}
              key={index}
              onClick={() => openLightboxOnSlide(index + 1)}
            >
              <Box src={img} />
            </Col>
          ))}
        </Row>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images}
          slide={lightboxController.slide}
          type="image"
        />
        <Row>
          <Col className="text-center mt-5" md={12} sm={12} xs={12}>
            <ButtonMain text="LET'S GET STARTED" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
