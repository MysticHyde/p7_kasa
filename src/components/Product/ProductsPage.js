import { Link } from "react-router-dom";

function EmptyProductPage() {
  let itemList = [];
  for (let index = 0; index < 6; index++) {
    itemList.push(
      <div key={"gridEmptyProduct" + index} className="product-card empty">
        <span className="title"></span>
        <span className="title"></span>
      </div>
    );
  }
  return <>{itemList}</>;
}

function ProductPage(props) {
  console.log(props);
  const listItems = props.data.map((el) => (
    <div
      className="product-card"
      key={"productGrid" + el.id}
      style={{ backgroundImage: `url(${el.cover})` }}
    >
      <Link to={`/product/${el.id}`}>
        <span className="title">{el.title}</span>
      </Link>
    </div>
  ));

  return <>{listItems}</>;
}

export { EmptyGridProduct, GridProduct };
