import { motion } from "framer-motion";
import { Props } from "../types";

const firstCharVariants = {
  start: {
    opacity: 0,
    // scale: 0.8,
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
    // scale: 0.8,
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
      viewBox="0 0 416 100"
      className={className}
    >
      <motion.g variants={firstCharVariants} initial="start" animate="end">
        <path
          id="t"
          d="M113.245 47.8778C113.245 46.7732 112.351 45.8778 111.248 45.8778H92V0H226L185.717 45.8778H167.901C166.798 45.8778 165.903 46.7732 165.903 47.8778V68.3643L137.911 100H113.245V47.8778Z"
          fill="currentColor"
        />
      </motion.g>

      <motion.g variants={restVariants} initial="start" animate="end">
        <path
          id="h"
          d="M245 89.0125C245 87.9079 245.951 87.0125 247.125 87.0125H261C262.174 87.0125 263.125 87.9079 263.125 89.0125V100H310V6.67677e-06L263.125 0V11.0019C263.125 12.1064 262.174 13.0019 261 13.0019L247.125 13.0019C245.951 13.0019 245 12.1064 245 11.0019L245 6.67677e-06H231L198 37.5V100H245L245 89.0125Z"
          fill="currentColor"
        />
        <path
          id="e"
          d="M416 0H314V99.9999L416 99.9999V67.4589L371.547 67.4589C370.442 67.4589 369.547 66.5634 369.547 65.4589V64.0651C369.547 62.9606 370.442 62.0651 371.547 62.0651L396.112 62.0651V36.8729L371.547 36.8729C370.442 36.8729 369.547 35.9775 369.547 34.8729V33.7896C369.547 32.685 370.442 31.7896 371.547 31.7896L416 31.7896V0Z"
          fill="currentColor"
        />
      </motion.g>
    </svg>
  );
};
