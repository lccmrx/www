import * as React from "react";
import classNames from "classnames";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

// Context
import { State } from "../components/Layout";

// Data
import { bioDescription, subBioDescription, careerPath, academyPath, CV} from "../data";

// Images
import headshot from "../images/headshot.jpg";

// Styles
import "../styles/global.scss";
import "../styles/about.scss";
import Headshot from "../components/Headshot";

const About = () => {
  const [activePanel, setActivePanel] = React.useState(1);
  const { setCopied } = React.useContext(State);

  const copyText = () => {
    navigator.clipboard.writeText(bioDescription).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }, console.log);
  };

  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 2000);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1440 : true;

  return (
    <>
      <Cursor />

      <div className="about">
        <Loader isOpened={isOpened} />
        <Header goBackToHome={true} />
        <main>
          <div className="headshot column">
            {isMobile ? <img src={headshot} alt="headshot" /> : <Headshot />}

            <a
              className="button -download -icon"
              href={headshot}
              download={true}
            >
              <FiDownload />
              <p>download photo</p>
            </a>
          </div>
          <div className="bio column">
            <h3 className="about-title">bio</h3>
            <p className="paragraph">
              {bioDescription}
            </p>
            <p className="paragraph">
              {subBioDescription}
            </p>
            <ul className="control">
              <li>
                <button className="-icon" onClick={copyText}>
                  <FiCopy />
                  <p>copy bio</p>
                </button>
              </li>
              <li>
                <a className="button -icon" href={CV} download={true}>
                  <FiDownload />
                  <p>download cv</p>
                </a>
              </li>
            </ul>
            <div className="toggle">
              <button
                className={classNames("-toggle", {
                  "--active": activePanel === 1,
                })}
                onClick={() => setActivePanel(1)}
              >
                career path
              </button>
              <button
                className={classNames("-toggle", {
                  "--active": activePanel === 2,
                })}
                onClick={() => setActivePanel(2)}
              >
                academy path
              </button>
            </div>
            {activePanel === 1 ? (
              <ol className="career-path">
                {careerPath.map(({ role, details, description }, index) => {
                  return (
                    <li key={index} className="about-career-experience">
                      <h4 className="role">{role}</h4>
                      <br />
                      <h5 className="infos">{details}</h5>
                      <p className="description">{description}</p>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <ol className="career-path -academic">
                {academyPath.map(({ role, details, description }, index) => {
                  return (
                    <li key={index} className="about-career-experience">
                      <h4 className="role">{role}</h4>
                      <br />
                      <h5 className="infos">{details}</h5>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        </main>
        <Note />
      </div>
    </>
  );
};

export default About;

export const Head = () => <title>me | lccmrx</title>;
