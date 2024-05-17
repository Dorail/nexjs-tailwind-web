import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//Conponent
import Nav from "./component/Nav";

export const metadata: Metadata = {
  title: "newjs-tsx-web",
  description: "newjs-tsx-web-1",
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
      <body className={inter.className}>
        <div className="w-screen h-screen">
          <div id="Nav" className="h-18 sticky top-0">
            <Nav />
          </div>
          <div className="h-[calc(100vh - 6rem)]">
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
