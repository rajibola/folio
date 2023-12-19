import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimLink } from "../anim-link";
import { Curve } from "../curve";
import { FooterLinks } from "../footer-links";

export const menuSlide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide: Variants = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale: Variants = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen fixed right-0 top-0 bg-white text-black z-30 md:w-fit w-full"
    >
      <div className="box-border h-full p-24 flex flex-col justify-between border-spacing-0">
        <div
          className="flex flex-col text-5xl mt-20 gap-3"
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <div className="text-gray-500 uppercase mb-10 border-b text-xs">
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => {
            return (
              <AnimLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <FooterLinks />
      </div>
      <Curve />
    </motion.div>
  );
};
