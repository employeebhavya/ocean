import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import GoToTopButton from "@/components/GoToTopButton";
import Script from "next/script"; // ✅ Import Script
import { getMetadata } from "@/app/metadata-config";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "300"],
});

export const metadata = {
  title: "Ocean Lifespaces | Civil Construction Company in Chennai",
  description:
    "Build with confidence! Ocean Lifespaces India Pvt Ltd delivers Civil Construction Company in Chennai with innovation and trust.",
  keywords: "Ocean Lifespaces India Pvt Ltd",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="3IRwYPpAbdgsZkHf91RbsCBqImSHypc8xWXBayOvdcc"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DY1EBZHY2N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DY1EBZHY2N');
          `}
        </Script>
      </head>
      <body className={`${roboto.variable} `}>
        <Menu />
        {children}
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  );
}
