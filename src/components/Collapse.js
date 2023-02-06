import { useState } from "react";
import { ReactComponent as Arrow } from "../images/arrow.svg";

function Collapse({ title, children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div
        className="title"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <span>{title}</span>
        <button className={isOpen ? "active" : "inactive"}>
          <Arrow />
        </button>
      </div>
      <div
        className={`content ${!isOpen ? 'close' : ''}`}
      >
        {typeof children == 'string' ?
          children
          :
          <ul>{Object.keys(children).map(i => <li key={`list_on_collapse${children[i]}`}>{children[i]}</li>)}</ul>}
      </div>
    </div>
  );
}

function EmptyCollapse() {


  return (
    <div className="collapse collapse--empty">
      <div
        className="title">
        <span></span>
        <button className="active">
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export { Collapse, EmptyCollapse };
