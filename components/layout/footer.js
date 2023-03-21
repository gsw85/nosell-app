const copyRight = `© ${new Date().getFullYear()} NOSELL. All rights reserved.`;

export function FooterWhiteTransparent() {
  return (
    <footer className="bg-transparent py-20 text-center text-sm">
      {copyRight}
    </footer>
  );
}
