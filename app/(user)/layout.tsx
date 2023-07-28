import { Header } from "@/shared/header";
import { LocomotiveScroller } from "@/shared/locomotive-scroller";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ridwan Ajibola",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocomotiveScroller />
        <Header />
        {children}
      </body>
    </html>
  );
}
