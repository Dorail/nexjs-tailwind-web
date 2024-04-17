import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//Conponent
import Nav from "./component/Nav";

export const metadata: Metadata = {
  title: "First Nextjs-Tailwind",
  description: "Generated by create next app",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Nav />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
