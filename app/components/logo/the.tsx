import { motion } from "framer-motion";
import { Props } from "./types";

const firstCharVariants = {
  start: {
    opacity: 0,
    scale: 0.8,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const restVariants = {
  start: {
    opacity: 0,
    scale: 0.8,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 3,
    },
  },
};

export const The = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={"100%"}
      fill="none"
      viewBox="0 0 344 100"
      className={className}
    >
      <motion.g
        id="t"
        variants={firstCharVariants}
        initial="start"
        animate="end"
      >
        <path
          d="M21.2727 47.8778C21.2727 46.7732 20.3772 45.8778 19.2727 45.8778H0V0H144L103.664 45.8778H76C74.8954 45.8778 74 46.7732 74 47.8778V88.5L64.0651 100H21.2727V47.8778Z"
          fill="currentColor"
        />
      </motion.g>

      <motion.g id="he" variants={restVariants} initial="start" animate="end">
        <path
          d="M344 0H232V99.9999L344 99.9999V67.4589L289.809 67.4589C288.705 67.4589 287.809 66.5634 287.809 65.4589V64.0651C287.809 62.9606 288.705 62.0651 289.809 62.0651L314.5 62.0651V36.8729L289.809 36.8729C288.705 36.8729 287.809 35.9775 287.809 34.8729V33.7896C287.809 32.685 288.705 31.7896 289.809 31.7896L344 31.7896V0Z"
          fill="currentColor"
        />
        <path
          d="M163 89.0125C163 87.9079 163.951 87.0125 165.125 87.0125H179C180.174 87.0125 181.125 87.9079 181.125 89.0125V100H228V6.67677e-06L181.125 0V11.0019C181.125 12.1064 180.174 13.0019 179 13.0019L165.125 13.0019C163.951 13.0019 163 12.1064 163 11.0019L163 6.67677e-06H149L116 37.5V100H163L163 89.0125Z"
          fill="currentColor"
        />
      </motion.g>
    </svg>
  );
};
