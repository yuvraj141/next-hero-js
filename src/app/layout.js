import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

import {Roboto,Inter} from 'next/font/google'
const roboto=Roboto({weight:['400','500','700'],subsets:["latin"]})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default:"NExt Hero",
    template:" %s | NExt Hero"
  },
  description: "Powerful next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={roboto.className}
      >
      <NavBar></NavBar>
        {children}
        <footer className='p-5 text-2xl font-bold text-center bg-blue-500 text-white'>
        <h3>This is my footer</h3>
      </footer>
      </body>
      
    </html>
  );
}
