import { Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

function CardBox({
  ribbonTitle,
  price,
  delPrice,
  iconImg,
  children,
  setShow,
  setData,
}) {
  return (
    <div className={styles.pricemainBox}>
      <div className={styles.titleHeading}>{ribbonTitle}</div>
      <div className={styles.priceTag}>
        <Row>
          <Col lg={9} md={9} sm={9} xs={12}>
            <small>Cost Effective Package for your business</small>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <div className={styles.priceTilte}>
                  <small>${price}.00</small>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                <div className={styles.delTilte}>
                  <small>
                    Was <del>{delPrice}</del>
                  </small>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={3} md={3} sm={3} xs={12}>
            <div className={styles.iconImg}>
              <img src={iconImg} alt="icon" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.priceList}>
        <ul>{children}</ul>
      </div>
      <div className={styles.cardBtn}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setData({ package: ribbonTitle, price: price });
            setShow(true);
          }}
        >
          Order Now
        </a>
        <a href="#">CHAT & DISCUSS?</a>
      </div>
    </div>
  );
}

export default CardBox;
