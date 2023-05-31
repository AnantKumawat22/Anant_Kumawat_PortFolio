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
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GeneralState>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GeneralState>
    </>
  );
}
