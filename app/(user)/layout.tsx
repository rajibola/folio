import { Header } from "@/shared/header";
import "../globals.css";
import { Inter } from "next/font/google";
import { PageTransition } from "@/shared/page-transition";
import { LocomotiveScroller } from "@/shared/locomotive-scroller";

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
        <PageTransition />
        <Header />
        {children}
      </body>
    </html>
  );
}
