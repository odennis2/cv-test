import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcs_Xmk1lpdVH7FiPPrYHTWwhAIjKmJgY",
  authDomain: "oscar-online-cv.firebaseapp.com",
  projectId: "oscar-online-cv",
  storageBucket: "oscar-online-cv.firebasestorage.app",
  messagingSenderId: "119568961333",
  appId: "1:119568961333:web:fd9e2a772bcf3f1cf9067c",
  measurementId: "G-DWQ12JJZPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
