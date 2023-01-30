import { ReactComponent as Star } from "../../images/star.svg";
function EmptyRating() {
  let itemList = [];
  for (let index = 0; index < 5; index++) {
    itemList.push(
      <li key={"emptyStar" + index}>
        <Star stroke="#E3E3E3" fill="#E3E3E3" height={30} width={30} />
      </li>
    );
  }
  return <ul>{itemList}</ul>;
}

function Rating(props) {
  let itemList = [];
  let NbStars = parseInt(props.stars);

  if (NbStars > 0) {
    for (let index = 0; index < NbStars; index++) {
      itemList.push(
        <li key={"star" + index}>
          <Star stroke="#ff6060" fill="#ff6060" />
        </li>
      );
    }
    let otherStars = 5 - NbStars;
    if (otherStars > 0) {
      for (let index = 0; index < otherStars; index++) {
        itemList.push(
          <li key={"disabledStar" + index}>
            <Star stroke="#E3E3E3" fill="#E3E3E3" />
          </li>
        );
      }
    }
  }

  return (
    <div className="rating">
      <ul>{itemList}</ul>
    </div>
  );
}

export { EmptyRating, Rating };
