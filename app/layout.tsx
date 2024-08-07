import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/home/header";
import Footer from "./ui/home/footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

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
  //   if (userInfo.email) {
  //     redirect("/dashboard");
  //   }
  // }

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1920px] mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
