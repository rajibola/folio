import gsap from "gsap";
import { FC, useLayoutEffect, useRef } from "react";
import Image from "next/image";

export const LargeImage: FC<{ image?: string }> = ({ image }) => {
  const hero = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    gsap.to(heroImage.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: hero.current,
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <section ref={hero} className="h-[110vh] overflow-hidden relative">
      <Image
        src={image!}
        ref={heroImage}
        height={1400}
        width={1600}
        className="block h-[125%] width-[100%] absolute -top-[35%] will-change-transform object-cover"
        alt="hero"
      />
    </section>
  );
};
