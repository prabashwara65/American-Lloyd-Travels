// app/layout.tsx
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/* 
        1. flex flex-col min-h-screen creates a full-height column stack.
        2. relative ensures nested absolute items don't bleed out.
      */}
      <body className="relative flex min-h-screen flex-col bg-white">
        <Navbar />
        {/* flex-1 / flex-grow expands content to push footer down */}
        <div className="flex-1 w-full flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}