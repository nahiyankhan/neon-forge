import { motion } from "framer-motion";
import { Props } from "./types";

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
      delay: 0.5,
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
      delay: 2.5,
    },
  },
};

export const What = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={"100%"}
      fill="none"
      viewBox="0 0 506 100"
      className={className}
    >
      <motion.g variants={firstCharVariants} initial="start" animate="end">
        <path
          id="w"
          d="M82.852 3.79995e-07V12.7256C82.852 14.5642 80.5819 15.4287 79.3608 14.0551L66.8658 1.77876e-06L54.3707 14.0551C53.1496 15.4287 50.8796 14.5642 50.8796 12.7256V3.17752e-06L-8.74228e-06 0L0.00413156 99.9999H50.8796L63.8813 85.3892C65.4708 83.6031 68.2608 83.6031 69.8502 85.3892L82.852 99.9999L133.996 100L134 6.45691e-05L82.852 3.79995e-07Z"
          fill="currentColor"
        />
      </motion.g>

      <motion.g variants={restVariants} initial="start" animate="end">
        <path
          id="h"
          d="M203 10.9875C203 12.0921 202.049 12.9875 200.875 12.9875L187 12.9875C185.826 12.9875 184.875 12.0921 184.875 10.9875V6.04484e-06L138 1.94691e-06L138 99.9999L184.875 99.9999V88.9981C184.875 87.8935 185.826 86.9981 187 86.9981L200.875 86.9981C202.049 86.9981 203 87.8935 203 88.9981L203 99.9999H229L250 76.2103V4.10887e-06L203 0L203 10.9875Z"
          fill="currentColor"
        />
        <path
          id="t"
          d="M391.773 47.8777C391.773 46.7732 390.877 45.8777 389.773 45.8777H370.5V0H504.675L464.339 45.8777H446.5C445.395 45.8777 444.5 46.7731 444.5 47.8777V68.3642L416.471 99.9999H391.773V47.8777Z"
          fill="currentColor"
        />
        <path
          id="a"
          d="M296.824 100H233.49L313.364 9.98711C313.364 9.98711 320.378 6.86646e-05 334.838 6.86646e-05H366.49V100H313.364V87.1306C313.364 85.3076 311.124 84.4351 309.891 85.7775L296.824 100Z"
          fill="currentColor"
        />
      </motion.g>
    </svg>
  );
};
