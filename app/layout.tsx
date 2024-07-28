import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";

//const font = Manrope({ subsets: ["latin"] });
const font = GeistSans;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
