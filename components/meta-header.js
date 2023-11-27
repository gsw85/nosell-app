export default function metaheader(
  title = "Selling made simple, for everyone",
  description = "Sell anything, anywhere, in seconds with Nosell - the ultimate platform for hassle-free product selling.",
  keywords = "",
  image = "/banner.jpg",
  noIndexNoFollow = false,
  url = "https://www.nosell.xyz"
) {
  const tagTitle = "NOSELL | " + title;
  const imageUrl = "https://www.nosell.xyz" + image;
  const tagKeyWords =
    "digital products, sell for crypto, sell for bitcoin, sell for usdt, web3 sell, web3 ecommerce, anonymous selling, anonymous" +
    keywords;
  return {
    title: tagTitle,
    description,
    keywords: tagKeyWords,
    robots: noIndexNoFollow && "noindex,nofollow",
    "twitter:card": "summary",
    "twitter:url": url,
    "twitter:title": tagTitle,
    "twitter:description": description,
    "twitter:image": imageUrl,
    "og:type": "website",
    "og:url": url,
    "og:title": tagTitle,
    "og:site_name": "marquint.com",
    "og:description": description,
    "og:image": imageUrl,
  };
}
