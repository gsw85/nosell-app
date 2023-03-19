import Nav from "@/components/layout/nav";
import { FooterWhiteTransparent } from "@/components/layout/footer";

export default function Main({ children }) {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto">{children}</main>
      <FooterWhiteTransparent />
    </>
  );
}
