import type { Metadata } from "next";
import { Poppins } from 'next/font/google'

import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "SkyBox",
  description: "SkyBox - The only storage solution you need.",
  icons: [
    {
      url: "/assets/images/logo-lg.png",
      rel: "icon",
    },
    // manifest: "/manifest.json",
   
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
