import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="error_page">
      <p className="status">{error.status}</p>
      <p className="message">{error.statusText || error.message}</p>
      <Link className="home" to={`/`}>
        Retourner à la page d'accueil
      </Link>
    </div>
  );
}
