import Nav from "@/components/layout/nav";

export default function Main({ children }) {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-4 xl:px-0 min-h-screen">
        {children}
      </main>
    </>
  );
}
