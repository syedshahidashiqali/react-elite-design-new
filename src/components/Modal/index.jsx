import styles from "./index.module.scss";
import { Container, Row, Col, Modal } from "react-bootstrap";
import CouponForm from "../CouponForm";

export default function CouponModal({ show, setShow, data, setData }) {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <div className={styles.modalBodyWrapper}>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <div className={styles.modalTextWrapper}>
                  <h6>chat with us to</h6>
                  <h5>avail discount</h5>
                </div>
              </Col>
            </Row>
          </div>
          <CouponForm data={data} setData={setData} />
        </Container>
      </Modal.Body>
    </Modal>
  );
}
