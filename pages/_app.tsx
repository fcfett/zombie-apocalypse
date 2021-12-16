import { useEffect } from "react";
import type { AppProps } from "next/app";

import { initInfectedStorage } from "../services";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initInfectedStorage();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
