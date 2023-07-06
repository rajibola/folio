"use client";

import { Header } from "@/shared/header";
import { gsap } from "gsap/dist/gsap";

export default function Home() {
  const homeTimeline = gsap.timeline();
  return (
    <div>
      <Header />
    </div>
  );
}
