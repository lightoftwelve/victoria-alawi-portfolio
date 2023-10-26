import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ textAlign: "center", padding: "5rem 0" }}>
      <h1>Uh-oh!</h1>
      <p>Something didnt go as planned. We apologize for the inconvenience.</p>
      <p>
        Error details: <i>{error.statusText || error.message}</i>
      </p>

      <Link to="/">
        <button className="buttonStyle">HOME</button>
      </Link>
    </div>
  );
}
