

function Banner(props) {
  return (
    <div
      className={`banner banner--${props.size}`}
      style={{ backgroundImage: `url(${props.url})` }}
    >
      {props.text && <span>{props.text}</span>}
    </div>
  );
}

export default Banner;
