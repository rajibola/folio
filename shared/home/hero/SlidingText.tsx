import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SlidingText = () => {
  const sliding: React.MutableRefObject<null> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliding.current, {
      scrollTrigger: {
        scrub: true,
        start: `top top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      ease: "none",
      xPercent: -90,
    });
  }, []);

  return (
    <p
      ref={sliding}
      className="font-black text-9xl w-full whitespace-nowrap absolute top-0"
    >
      Frontend - Web Developer - Mobile Developer
    </p>
  );
};
