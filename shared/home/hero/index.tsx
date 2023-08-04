"use client";

import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Oswald } from "next/font/google";
import { useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import styled from "styled-components";

const playfair = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface MousePosition {
  x: number;
  y: number;
}

export const Hero = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition() as MousePosition;
  const size: number = isHovered ? 400 : 10;

  return (
    <Main style={playfair.style}>
      <motion.div
        className="mask bg-accent-dark"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Web & <br />
          Mobile
          <br />
          Apps
          <br /> Since
          <br /> 2018
        </p>
      </motion.div>
      <div className="body">
        <p>
          Built
          <br />
          <span className="text-accent-light">
            Nice
            <br />
            apps
          </span>
          <br />
          since
          <br />
          2018
        </p>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;

  .mask,
  .body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 74px;
    line-height: 76px;
    cursor: default;

    p {
      width: 1000px;
      padding: 40px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 900;
    }
  }

  .mask {
    mask-image: url("./mask-image.svg");
    mask-repeat: no-repeat;
    mask-size: 40px;
    /* background: #08080c; */
    position: absolute;
    /* color: black; */
  }

  .lineParent {
    overflow: hidden;
  }
`;
