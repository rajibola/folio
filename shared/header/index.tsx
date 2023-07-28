"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Roboto, Dosis } from "next/font/google";
import styled, { css } from "styled-components";
import { Sidebar } from "./sidebar";

const roboto = Roboto({ weight: ["100", "300", "500"], subsets: ["cyrillic"] });
const dosis = Dosis({ weight: ["400"], subsets: ["latin"] });

const data = [0, 3, 5, 7, 9, ""];
const data2 = [2, 4, 6, 8, 9, ""];

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }}
        className="absolute top-10 left-10 text-4xl font-bold z-50"
        style={roboto.style}
      >
        Ridwan.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }}
        className="fixed top-10 right-10 z-50 w-10 h-10 rounded-full bg-white flex items-center"
        style={roboto.style}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <Burger isOpen={isMenuOpen} />
      </motion.div>

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
    margin: auto;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  &::after {
    top: -3px;
  }

  &::before {
    top: 3px;
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
