import "@/styles/globals.css";
import Main from "@/components/layout/main";

export default function App({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
