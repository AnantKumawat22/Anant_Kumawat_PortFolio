// GLobal CSS
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

import "react-responsive-carousel/lib/styles/carousel.min.css";


// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import GeneralState from "@/context/GeneralState";
import Footer from "@/components/Footer";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {

  // Bottom to top Button State.
  const [bottomToTop, setBottomToTop] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  return (
    <>
      <GeneralState>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        </Head>
        <Navbar setBottomToTop={setBottomToTop} />
        <Component {...pageProps} />
        <Footer />
        <button
            style={{
              visibility: bottomToTop ? "visible" : "hidden",
              opacity: bottomToTop ? "1" : "0",
            }}
            className="back-to-top"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
          </button>
      </GeneralState>
    </>
  );
}
