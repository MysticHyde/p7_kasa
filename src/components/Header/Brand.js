import { ReactComponent as Logo } from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Brand() {
  return (

    <Link to={`/`} className='brand'>
      <Logo fill="#FF6060"></Logo>
    </Link>

  );
}

export default Brand;
