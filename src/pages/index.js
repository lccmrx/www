import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Styles
import "../styles/global.scss";
import "../styles/index.scss";

const IndexPage = () => {
  const [isOpened, setIsOpened] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

  return (
    <>
      <Cursor />
      <div className="home">
        <Loader isOpened={isOpened} />
        <Header hideShortcut />
        <main>
          <Container>
            <h1 className="banner-title">Lucca Marques</h1>
            <h2 className="banner-subtitle">
              software engineer @{" "}
              <a target="_blank" href="https://mercadolivre.com.br">
                Mercado Livre Brazil
              </a>
            </h2>
            <p className="banner-description">
              and learning one thing at a time, sharing knowledge, building cool web apps,
              and gathering a bunchful experiences
            </p>
            <Shortcut text="to find what you are looking for" />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>lccmrx</title>;
