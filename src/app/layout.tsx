import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/general/navbar/Navbar";
import Footer from "@/component/general/Footer";
import ScrollToTopButton from "@/component/general/ScrollToTopButton";

const poppins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
  
});



export const metadata: Metadata = {
  title: "Aravan's Portfolio Website",
  description: "Aravan's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased bg-slate-950`}
      >

       < Navbar/>
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
