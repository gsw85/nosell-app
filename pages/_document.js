import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <Head />
      <body className="min-h-full font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
