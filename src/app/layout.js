import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FloatingActionButton from "@/components/layout/FloatingActionButton";


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL("https://tagsbikez.com"),
  title: {
    default: "Tags Bikez | Royal Enfield Dealer in Kerala",
    template: "%s | Tags Bikez",
  },
  description:
    "Explore the latest Royal Enfield motorcycles, offers, accessories, and services at Tags Bikez, your trusted Royal Enfield dealership in Kerala.",
  alternates: {
    canonical: "https://tagsbikez.com/",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <LenisProvider>
          <Navbar />
          <Breadcrumb />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActionButton />
        </LenisProvider>

      </body>
    </html>
  );
}
