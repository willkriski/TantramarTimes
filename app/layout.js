import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

// Comment out or remove these lines temporarily
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Tantramar Times",
  description: "Trusted News Source for Tantramar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased"> {/* Remove geistSans.variable and geistMono.variable */}
        {children}
      </body>
    </html>
  );
}
