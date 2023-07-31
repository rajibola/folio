import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Magnetic } from "../magnetic";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  [x: string]: any; // for other props which can be spread into the div element
}

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor = "#808082",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (!circle.current) return;

    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <RoundedButton
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="w-full h-[150%] absolute rounded-[50%] top-full"
        ></div>
      </RoundedButton>
    </Magnetic>
  );
};

const RoundedButton = styled.div`
  border-radius: 3em;
  border: 1px solid rgb(136, 136, 136);
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 60px 15px 60px;
  p {
    position: relative;
    z-index: 1;
    transition: color 0.4s linear;
  }
  &:hover {
    p {
      color: white;
    }
  }
`;
