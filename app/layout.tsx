import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";
import { Providers } from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <Providers>
          <Home />
        </Providers>
      </body>
    </html>
  );
}
