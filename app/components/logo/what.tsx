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
      delay: 0.5,
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
      viewBox="0 0 491 100"
      className={className}
    >
      <motion.g
        id="w"
        variants={firstCharVariants}
        initial="start"
        animate="end"
      >
        <path
          d="M71.9541 3.50128e-06L71.9541 12.7396C71.9541 14.5786 69.6811 15.4428 68.4593 14.0683L55.9541 4.90005e-06L43.4489 14.0683C42.2271 15.4429 39.9541 14.5786 39.9541 12.7396L39.9541 6.29881e-06L-8.74228e-06 9.79171e-06L0.00413513 100L39.9541 100L52.9645 85.3633C54.5556 83.5732 57.3526 83.5732 58.9438 85.3633L71.9541 100L112 100L112.003 35.2267L112.003 17.6133L112.004 7.62939e-06L71.9541 3.50128e-06Z"
          fill="currentColor"
        />
      </motion.g>

      <motion.g id="hat" variants={restVariants} initial="start" animate="end">
        <path
          d="M369.273 47.8778C369.273 46.7732 368.377 45.8778 367.273 45.8778H348V0H491L450.664 45.8778H424C422.895 45.8778 422 46.7732 422 47.8778V88.5L412.065 100H369.273V47.8778Z"
          fill="currentColor"
        />
        <path
          d="M274.5 100L212 100L291 10C291 10 297.998 0.014389 312.423 0.014389H344V100H291V87.1416C291 85.3176 288.758 84.4456 287.526 85.7902L274.5 100Z"
          fill="currentColor"
        />
        <path
          d="M181 10.9875C181 12.0921 180.049 12.9875 178.875 12.9875L165 12.9875C163.826 12.9875 162.875 12.0921 162.875 10.9875V9.56537e-06L116 5.46744e-06L116 100L162.875 100V88.9981C162.875 87.8936 163.826 86.9981 165 86.9981L178.875 86.9981C180.049 86.9981 181 87.8936 181 88.9981L181 100H207L228 76.2103V7.62939e-06L181 3.52052e-06L181 10.9875Z"
          fill="currentColor"
        />
      </motion.g>
    </svg>
  );
};
