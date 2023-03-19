import Head from "next/head";

export default function MetaHeader({
  title = "A Sip of Goodness, Lasting Quality",
  description = "Walker Tea is a company dedicated to providing its customers with the highest quality tea blends.",
  keywords = "",
  image = "/walkertea.jpg",
  noIndexNoFollow = true,
  url = "https://www.nosell.xyz",
}) {
  const tagTitle = "NOSELL | " + title;
  const imageUrl = "https://www.nosell.xyz" + image;
  const tagKeyWords =
    "Walker Tea, Tea Lover, Tea Time, Tea Addict, Tea Culture, High Quality Tea, Premium Tea" +
    keywords;
  return (
    <>
      <Head>
        {noIndexNoFollow && <meta name="robots" content="noindex,nofollow" />}
        <meta charSet="utf-8" />
        <title>{title}</title>
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
        <meta property="og:site_name" content="walkertea.com" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
    </>
  );
}
