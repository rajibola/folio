import { Header } from "@/shared/header";
import { LocomotiveScroller } from "@/shared/locomotive-scroller";
import { Lato } from "next/font/google";
import "../globals.css";
import { Footer } from "@/shared/footer";
import { TransitionProvider } from "@/context/TransitionContext";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  fallback: ["latin"],
});

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
      <TransitionProvider>
        <body className={inter.className}>
          <LocomotiveScroller />
          <Header />
          {children}
          <Footer />
        </body>
      </TransitionProvider>
    </html>
  );
}
