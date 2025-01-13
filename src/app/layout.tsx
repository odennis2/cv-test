import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: "Oscar Dennis",
  description: "Online portfolio for Oscar Dennis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
