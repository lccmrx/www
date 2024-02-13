import { Link } from "gatsby";
import * as React from "react";

// Components
import Container from "../Container";

// Data
import { socials } from "../../data";

// Styles
import "./index.scss";

const Footer = () => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  return (
    <footer className="footer">
      <ul className="list">
        <li className="only-mobile">
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            about
          </Link>
        </li>

        <li className="only-mobile">
          <Link
            to="/actions/"
            className={pathname?.startsWith("/actions") ? `-active` : ``}
          >
            quick actions
          </Link>
        </li>
        <li>
          <Link
            to={socials.email}
          >
            email
          </Link>
        </li>
        <li>
          <Link
            to={socials.linkedin}
          >
            linkedin
          </Link>
        </li>
        <li>
          <Link
            to={socials.github}
          >
            github
          </Link>
        </li>
        <li>
          <Link
            to={socials.instagram}
          >
            instagram
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
