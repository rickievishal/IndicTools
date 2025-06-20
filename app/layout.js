import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata = {
  title: "IndicTools",
  description: "IndicTools is a collaborative open-source platform focused on building AI tools for Indian languages—covering colloquial translation, expressive speech, and adaptive learning frameworks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${manrope.variable} antialiased relative tracking-tight`}
      >
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
