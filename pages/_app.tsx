import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const NextComponent = Component as any;
  return <NextComponent {...pageProps} />;
}

export default MyApp;
