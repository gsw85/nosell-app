import "./(style)/globals.css";
import { Inter } from "next/font/google";
import metaheader from "@/components/meta-header";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
export const metadata = metaheader();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        <Nav />
        <main className="mx-auto max-w-7xl px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
