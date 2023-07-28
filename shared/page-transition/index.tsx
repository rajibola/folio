"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Roboto, Dosis } from "next/font/google";
import styled, { css } from "styled-components";

const roboto = Roboto({ weight: ["100", "300", "500"], subsets: ["cyrillic"] });
const dosis = Dosis({ weight: ["400"], subsets: ["latin"] });

const data = [0, 3, 5, 7, 9, ""];
const data2 = [2, 4, 6, 8, 9, ""];

export const PageTransition = () => {
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);
  const [y3, setY3] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const intervals1 = [...Array(data.length).keys()].map((_, i) => {
      return setTimeout(() => {
        setY1(-310 * i);
      }, i * 500);
    });

    const intervals2 = [...Array(data2.length).keys()].map((_, i) => {
      return i === 0
        ? null
        : setTimeout(() => {
            setY2(-310 * i);
          }, i * 500 + 50);
    });

    const intervals3 = [...Array(data2.length).keys()].map((_, i) => {
      return i === 0
        ? null
        : setTimeout(() => {
            setY3(-310 * i);
          }, i * 500 + 100);
    });

    return () => {
      [...intervals1, ...intervals2].forEach((int: any) => clearTimeout(int));
    };
  }, []);

  return (
    <motion.div
      animate={{ height: "0" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 2.8 }}
      className="fixed h-screen w-screen bg-black"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 2.5 }}
        className="overflow-hidden h-[220px] leading-none absolute bottom-5 right-5 flex text-[220px] w-auto"
      >
        <motion.div
          animate={{ y: y1, transition: { ease: "easeInOut" } }}
          transition={{ type: "tween" }}
        >
          {data.map((item, i) => {
            return (
              <div className="h-[310px] w-auto" key={i}>
                {item}
              </div>
            );
          })}
        </motion.div>
        <motion.div
          animate={{ y: y2, transition: { ease: "easeInOut" } }}
          transition={{ type: "tween" }}
        >
          {data2.map((item, i) => {
            return (
              <div className="h-[310px] w-auto" key={i}>
                {item}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          animate={{ y: y3, transition: { ease: "easeInOut" } }}
          transition={{ type: "tween" }}
        >
          {Array(data2.length)
            .fill("%")
            .map((item, i) => {
              return (
                <div className="h-[310px] w-auto" key={i}>
                  {item}
                </div>
              );
            })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
