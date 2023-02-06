function Tags(props) {
  const listItems = props.list.map((el) => (
    <span
      key={"product_tag" + el}
    // style={{ backgroundImage: `url(${el.cover})` }}
    >
      {el}
    </span>
  ));

  return <div className="tags_list">{listItems}</div>;
}
function EmptyTags() {
  return (
    <div className="tags_list tags_list--empty">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export { Tags, EmptyTags };
