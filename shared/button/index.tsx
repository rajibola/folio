"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Magnetic } from "../magnetic";
import styled from "styled-components";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon";

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  [x: string]: any; // for other props which can be spread into the div element
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  backgroundColor = "#1916df",
  ...attributes
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    if (!circleRef.current) return;

    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circleRef.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circleRef.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );

    // Cleanup function to clear the timeout
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [timeline]);

  const manageMouseEnter = () => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutIdRef.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <div
      // style={{ overflow: "hidden" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
      className="cursor-pointer relative flex items-center justify-center overflow-hidden rounded-full border px-8 py-4"
    >
      {children}

      <div
        ref={circleRef}
        className="w-full h-[150%] absolute rounded-[50%] top-full bg-accent-light"
      />
    </div>
  );
};

// const RoundedButton = styled.div`
//   border-radius: 3em;
//   border: 1px solid;
//   cursor: pointer;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 15px 30px;
//   overflow: hidden;
//   gap: 20px;
//   p {
//     position: relative;
//     z-index: 1;
//     transition: color 0.4s linear;
//   }
//   &:hover {
//     p {
//       color: white;
//     }
//   }
// `;
