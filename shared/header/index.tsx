"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dosis, Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Sidebar } from "./sidebar";
import { usePathname } from "next/navigation";
import { Magnetic } from "../magnetic";

const roboto = Roboto({
  weight: ["100", "300", "500"],
  subsets: ["cyrillic"],
  fallback: ["cyrillic"],
});
const dosis = Dosis({ weight: ["400"], subsets: ["latin"] });

const data = [0, 3, 5, 7, 9, ""];
const data2 = [2, 4, 6, 8, 9, ""];

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }}
        className="absolute top-10 left-10 md:text-4xl md:font-bold z-50 text-[24px] font-normal"
        style={roboto.style}
      >
        Ridwan.
      </motion.div>
      <Magnetic>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }}
          className="fixed md:top-10 md:right-10 top-5 right-5 z-50 md:w-20 md:h-20 h-14 w-14 rounded-full bg-white flex items-center opacity-100 cursor-pointer"
          style={roboto.style}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <Burger isOpen={isMenuOpen} />
        </motion.div>
      </Magnetic>
      <AnimatePresence mode="wait">{isMenuOpen && <Sidebar />}</AnimatePresence>
    </header>
  );
};

const Burger = styled.div<{ isOpen: boolean }>`
  width: 100%;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background-color: black;
    margin: 0 auto;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  &::after {
    top: -5px;
  }

  &::before {
    top: 5px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      &::after {
        top: -1px;
        transform: rotate(45deg);
      }
      &::before {
        top: 0px;
        transform: rotate(-45deg);
      }
    `}
`;
