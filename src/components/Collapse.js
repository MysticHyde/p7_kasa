import { useState } from "react";
import { ReactComponent as Arrow } from "../images/arrow.svg";

function Collapse({ title, children }) {
  const [isOpen, setOpen] = useState(false);

  console.log('type:', typeof children);
  console.log(children);

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
          children : <ul>{Object.keys(children).map(i => <li>{children[i]}</li>)}</ul>}
      </div>
    </div>
  );
}

function EmptyCollapse() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="collapse collapse--empty">
      <div
        className="title"
        onClick={() => {
          setOpen(!isOpen);
        }}>
        <span></span>
        <button className="active">
          <Arrow />
        </button>
      </div>
      <div
        className={`content open`}

      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export { Collapse, EmptyCollapse };
