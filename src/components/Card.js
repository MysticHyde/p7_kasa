import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div
      className="product_card"
      key={"product_card" + props.cardId}
      style={{ backgroundImage: `url(${props.cardCover})` }}
    >
      <Link to={`/product/${props.cardId}`}>
        <span className="title">{props.cardTitle}</span>
      </Link>
    </div>
  );
}
function EmptyCard(props) {
  return (
    <div
      key={"empty_product_card" + props.cardId + Math.random()}
      className="product_card product_card--empty"
    >
      <span className="title"></span>
    </div>
  );
}

export { Card, EmptyCard };
