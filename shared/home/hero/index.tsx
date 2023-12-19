"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import { Oswald, Advent_Pro } from "next/font/google";
import { useState, useEffect } from "react";
import styled from "styled-components";

const playfair = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["latin"],
});

interface MousePosition {
  x: number;
  y: number;
}

export const Hero = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition() as MousePosition;
  const size: number = isHovered ? 400 : 10;

  // Add a state to track if mouse position is ready
  const [isMousePositionReady, setIsMousePositionReady] = useState(false);

  // Check if the mouse position is ready after the first load
  useEffect(() => {
    if (x !== null && y !== null) {
      setIsMousePositionReady(true);
    }
  }, [x, y]);

  return (
    <div style={playfair.style} className="h-screen">
      <Mask
        style={{
          maskImage: 'url("./mask-image.svg")',
          maskRepeat: "no-repeat",
          maskSize: "40px",
        }}
        className="bg-accent-dark absolute w-full h-full flex items-center justify-center text-white cursor-default md:text-[74px] md:leading-[76px] text-[46px] leading-[48px]"
        animate={
          isMousePositionReady
            ? {
                WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                WebkitMaskSize: `${size}px`,
              }
            : {}
        }
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className="p-10 text-center uppercase font-black w-[1000px]"
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
      </Mask>
      <div className="w-full h-full flex items-center justify-center text-white cursor-default md:text-[74px] md:leading-[76px] text-[46px] leading-[48px]">
        <p className="p-10 text-center uppercase font-black w-[1000px]">
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
    </div>
  );
};

const Main = styled.main`
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
    position: absolute;
    /* background: #08080c; */
    /* color: black; */
  }

  .lineParent {
    overflow: hidden;
  }
`;

const Mask = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  /* font-size: 74px;
  line-height: 76px; */
  cursor: default;

  mask-image: url("./mask-image.svg");
  mask-repeat: no-repeat;
  mask-size: 40px;
  position: absolute;
  /* background: #08080c; */
  /* color: black; */
`;
