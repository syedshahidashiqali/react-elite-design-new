import "./index.scss";
import { Nav } from "react-bootstrap";

function TabItem({ eventKey, img, normText, boldText }) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey}>
        <div className="tabInnerWrapper">
          <img src={img} alt="icon" />
          <div className="tabInnerTextWrapper">
            <span>{normText}</span>
            <h3>{boldText}</h3>
          </div>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
}

export default TabItem;
