
function User(props) {
  return (
    <div className="user_infos">
      <div className="name">{props.host.name}</div>
      <div
        className="picture"
        style={{ backgroundImage: `url(${props.host.picture})` }}
      ></div>
    </div>
  );
}

function EmptyUser() {
  return (
    <div className="user_info user_info--empty">
      <div className="name"></div>
      <div className="picture"></div>
    </div>
  );
}

export { User, EmptyUser };
