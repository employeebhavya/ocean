import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import GoToTopButton from "@/components/GoToTopButton";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "300"],
});

export const metadata = {
  title: "Ocean",
  description: "Ocean Turning Dreams into Reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} `}>
        <Menu />
        {children}
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  );
}
