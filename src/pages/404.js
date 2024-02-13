import * as React from "react";
import { Link } from "gatsby";

// Styles
import "../styles/notfound.scss";

// Components
import Loader from "../components/Loader";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>404</p>
      <Loader isOpened={true} linkBack={true} limit={404} />
      <Link to="/">go back to lccmrx.dev</Link>
    </div>
  );
};

export const Head = () => <title>nothing here | lccmrx</title>;

export default NotFound;
