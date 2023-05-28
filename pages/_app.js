// GLobal CSS
import "@/styles/globals.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import GeneralState from "@/context/GeneralState";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GeneralState>
        <Component {...pageProps} />
      </GeneralState>
    </>
  );
}
