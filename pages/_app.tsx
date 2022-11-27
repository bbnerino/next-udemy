import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // _app.js 는 애플리케이션 셸
  // HTML의 BODY 라고 생각
  return <Component {...pageProps} />;
}
