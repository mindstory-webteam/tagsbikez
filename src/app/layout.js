import { Oswald, Inter } from "next/font/google";
import Script from "next/script";
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
    default: "Tags Bikez | Royal Enfield Dealer in Thrissur, Kerala",
    template: "%s | Tags Bikez",
  },
  description:
    "Explore the latest Royal Enfield motorcycles, offers, accessories, and services at Tags Bikez, your trusted Royal Enfield dealership in Thrissur, Kerala.",
  alternates: {
    canonical: "https://tagsbikez.com/",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  verification: {
    google: "kvnVEngId6kiWU3VFQArCDKyqa75MvuDCX3K0dDVeTE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WV2CDTM9');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV2CDTM9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LenisProvider>
          <Navbar />
          <Breadcrumb />
          <main className="grow">{children}</main>
          <Footer />
          <FloatingActionButton />
        </LenisProvider>

      </body>
    </html>
  );
}
