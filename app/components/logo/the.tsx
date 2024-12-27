import { motion } from "framer-motion";

const t = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const he = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 3,
    },
  },
};

export const The = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={"100%"}
    fill="none"
    viewBox="0 0 297 100"
    {...props}
  >
    <motion.g id="t" variants={t} initial="start" animate="end">
      <path
        d="M32.2727 37.8948C32.2727 36.7903 31.3772 35.8948 30.2727 35.8948H0V0.0170898H125.139L92.9872 35.8948H77.9349C76.8303 35.8948 75.9349 36.7903 75.9349 37.8948V57.7745L39.0784 100.017H32.2727V37.8948Z"
        fill="currentColor"
      />
    </motion.g>

    <motion.g id="he" variants={he} initial="start" animate="end">
      <path
        d="M138.5 89C138.5 87.8954 139.395 87 140.5 87H155.5C156.605 87 157.5 87.8954 157.5 89L157.5 99.9856L178.5 99.9856L202.305 99.9856V-1.52588e-05L157.5 -2.28882e-05L157.5 11C157.5 12.1045 156.605 13 155.5 13L140.5 13C139.395 13 138.5 12.1045 138.5 11L138.5 -1.52588e-05L130.5 -2.28882e-05L94 41.5V99.9856L103.5 99.9856L116 99.9856L138.5 99.9856L138.5 89Z"
        fill="currentColor"
      />
      <path
        d="M297 0L207 4.02086e-05V100L297 100V67.4589L254.695 67.4589C253.59 67.4589 252.695 66.5635 252.695 65.4589V64.0652C252.695 62.9606 253.59 62.0652 254.695 62.0652L279.386 62.0652V36.8729L254.695 36.873C253.59 36.873 252.695 35.9775 252.695 34.873V33.7897C252.695 32.6851 253.59 31.7897 254.695 31.7897L297 31.7896V0Z"
        fill="currentColor"
      />
    </motion.g>
  </svg>
);
