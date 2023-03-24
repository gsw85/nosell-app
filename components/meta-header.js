import Head from "next/head";

export default function MetaHeader({
  title = "Selling made simple, for everyone",
  description = "Sell anything, anywhere, in seconds with Nosell - the ultimate platform for hassle-free digital product selling.",
  keywords = "",
  image = "/banner.jpg",
  noIndexNoFollow = true,
  url = "https://www.nosell.xyz",
}) {
  const tagTitle = "NOSELL | " + title;
  const imageUrl = "https://www.nosell.xyz" + image;
  const tagKeyWords =
    "digital products, sell for eth, sell for bitcoin, sell for busd, web3 sell, web3 ecommerce, anonymous selling, anonymous" +
    keywords;
  return (
    <>
      <Head>
        {noIndexNoFollow && <meta name="robots" content="noindex,nofollow" />}
        <meta charSet="utf-8" />
        <title>{tagTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={tagKeyWords} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={tagTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={tagTitle} />
        <meta property="og:site_name" content="nosell.xyz" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
    </>
  );
}
