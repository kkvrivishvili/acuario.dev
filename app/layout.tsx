import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import "./global.css";

export const metadata: Metadata = {
  title: "Acuario.dev - IA + RAG Personalizado",
  description: "RAG personalizado que escala, es económico y da respuestas precisas desde el día uno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@300;400;500;600;700&family=Cascadia+Mono:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}