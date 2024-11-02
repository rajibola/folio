"use client";
import MarqueeText from "@/shared/marquee/MarqueeText";
import { PROJECTS_IMAGES, SKILLS } from "@/utils/PROJECTS";
import { motion, transform } from "framer-motion";
import { Inter_Tight, Playfair_Display } from "next/font/google";

const oswald = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  fallback: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["latin"],
  style: ["italic", "normal"],
});

const containerVariants = {
  // hidden: { transform:  },
  visible: (i: number) => ({
    transform: "translateY(100%)",
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2 + i * 0.3, // Sequential delay for each item
    },
  }),
};

const imageVariants = {
  hidden: { scale: 1.6 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

export const NewHero = () => {
  return (
    <div style={oswald.style} className="min-h-screen">
      <div className="w-full min-h-screen px-10 text-cream">
        <div className="grid grid-cols-3 grid-rows-[repeat(5,_95px)] mt-24 gap-x-10">
          {[1, 2, 3].map((imgIndex, i) => (
            <motion.div
              key={imgIndex}
              custom={i}
              className={`bg-white row-span-${i + 3} relative overflow-hidden`}
            >
              <motion.img
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                whileHover={{
                  filter: "grayscale(100%)",
                  transition: { duration: 0.5 },
                }}
                className="w-full h-full object-cover absolute"
                src={PROJECTS_IMAGES[imgIndex].image}
                alt=""
              />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="absolute top-0 bg-black w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-[148px] col-span-2 leading-[0.8] tracking-[-0.04em] font-bold">
            <h1 className="p-0">
              FRONT
              <span style={playfair.style} className="italic font-light ml-4">
                end
              </span>
            </h1>
            <h1>DEVELOPER</h1>
          </div>

          <div className="self-end">
            <p style={oswald.style} className="font-light">
              As a frontend developer using modern ideas simplicity design and
              universal visual identification tailored to dedicated and current
              market.
            </p>

            <div className="h-12 px-6 border w-fit flex items-center rounded-full mt-10 tracking-wider">
              Let&apos;s discuss
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rotate-2 mt-6">
        <MarqueeText data={SKILLS} />
      </div>
      <div className="-rotate-2 bg-black -mt-10">
        <MarqueeText direction="right" data={SKILLS} />
      </div> */}
    </div>
  );
};
