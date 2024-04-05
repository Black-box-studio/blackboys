import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar";


const poppins = Poppins({ 
  weight: [ "100", "200", "300", "400", "500", "600", "700"], 
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "BlackBoys",
  description: "This is BlackBoys Studio Portfolio Website With Entertainment_hub,Blog, CV, Portfolio, About, Contact, Login, Register, Hub, Projects, and more with Next.js 14 and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="select-none">
      <body className={` ${poppins.className}  ${process.env.NODE_ENV == "development" ? "debug-screens" : ""}`}>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
