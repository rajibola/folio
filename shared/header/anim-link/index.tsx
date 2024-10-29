import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "../sidebar";

export const AnimLink = ({ data, isActive, setSelectedIndicator }: any) => {
  const { title, href, index, comingSoon } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-accent-light rounded-full absolute -left-[30px]"
      ></motion.div>
      <Link className="flex" href={comingSoon ? "#" : href}>
        {title}
        {comingSoon && (
          <div className="text-[10px] h-4 px-1 bg-black text-white grid place-items-center rounded-full">
            CS
          </div>
        )}
      </Link>
    </motion.div>
  );
};
