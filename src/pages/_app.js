import "@/styles/globals.css";
import { sen } from "../fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sen.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
