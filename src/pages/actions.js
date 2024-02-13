import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Data
import { CV, socials } from "../data";

// Styles
import "../styles/global.scss";
import "../styles/actions.scss";

const Actions = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 1300);
  }, []);

  return (
    <>
      <Cursor />

      <div className="actions">
        <Loader isOpened={isOpened} duration={0.8} />
        <Header hideShortcut={true} goBackToHome={true} />
        <main>
          <Container>
            <ul className="actions-list">
              <li>
                <a href={CV} download={true} target="_blank">
                  download cv
                </a>
              </li>
              <li>
                <a
                  href={socials.linkedin}
                  target="_blank"
                >
                  go to my linkedin
                </a>
              </li>
              <li>
                <a href="https://meet.google.com/" target="_blank">
                  book a meeting <span>invite to -> {socials.email.slice(7)}</span>
                </a>
              </li>
              <li>
                <a href={socials.github} target="_blank">
                  see my github
                </a>
              </li>
              <li>
                {" "}
                <a href={socials.email}>send me an email</a>
              </li>
              <li>
                <a href={socials.instagram} target="_blank">
                  follow me on instagram <span>(friends only)</span>
                </a>
              </li>
              <li>
                <a
                  href={socials.github + "/www"}
                  target="_blank"
                >
                  view source code of this website <span>(devs only)</span>
                </a>
              </li>
            </ul>
          </Container>
        </main>
        <Note />
      </div>
    </>
  );
};

export default Actions;

export const Head = () => <title>quick actions | cesarolvr</title>;
