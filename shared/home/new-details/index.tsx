"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import { useCallback, useEffect, useRef } from "react";

const oswald = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  fallback: ["latin", "italic"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["latin"],
  style: ["italic", "normal"],
});

const phrase: string =
  "Hi, I'm Ridwan Ajibola. A frontend developer that focuses on building responsive cross-platform mobile applications and websites that makes user Experience realistic.";

export const NewDetails = () => {
  return (
    <main
      style={oswald.style}
      className="h-screen text-white w-full p-10 gap-10 relative border grid grid-rows-2 mx-auto max-w-[1442]"
    >
      <div className="grid grid-cols-5 grid-rows-3 gap-10 w-full h-full">
        <div className="text-[80px] leading-[1] tracking-[-0.04em] font-bold overflow-hidden mb-10 row-span-2 col-span-2">
          <h1>Work</h1>
          <h1 style={playfair.style} className="italic">
            Experience
          </h1>
        </div>
        <div className="row-span-3 col-span-3 text-xl opacity-90 font-light leading-9 tracking-wide self-end">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            ratione voluptatem fugiat? Reiciendis reprehenderit architecto
            doloremque. Voluptates impedit, quia ratione necessitatibus mollitia
            beatae. Alias voluptatibus libero id numquam fugiat accusamus
            soluta, incidunt pariatur placeat minima non beatae repellendus
            neque atque dignissimos animi ducimus, ad delectus explicabo modi
            officiis! Sequi, excepturi?
          </div>
        </div>
        <div className="self-end row-start-3 row-end-4 col-start-1 col-end-2">
          <h1 className="font-bold text-6xl mb-3 text-success">6+</h1>
          <div className="w-28">Years of experience.</div>
        </div>
        <div className="self-end row-start-3 row-end-4 col-start-2 col-end-3">
          <h1 className="font-bold text-6xl mb-3 text-success">20+</h1>
          <div className="w-28">Projects completed.</div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10 w-full border h-full"></div>
    </main>
  );
};
