import "./(style)/globals.css";
import { Inter } from "next/font/google";
import { AuthContext } from "@/lib/wagmi";
import metaheader from "@/components/meta-header";
import Nav from "@/components/layout/nav";
export const metadata = metaheader();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={
          inter.className + " max-w-5xl mx-auto px-4 xl:px-0 min-h-screen"
        }
      >
        <AuthContext>
          <Nav />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
