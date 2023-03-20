import "@/styles/globals.css";
import Main from "@/components/layout/main";
import { AuthContext } from "@/lib/wagmi";

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <Main>
        <Component {...pageProps} />
      </Main>
    </AuthContext>
  );
}
