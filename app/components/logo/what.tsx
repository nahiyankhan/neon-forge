import { motion } from "framer-motion";

const w = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const hat = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 2.5,
    },
  },
};

export const What = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={"100%"}
    fill="none"
    viewBox="0 0 465 100"
    {...props}
  >
    <motion.g id="w" variants={w} initial="start" animate="end">
      <path
        d="M77.9541 4.02546e-06L77.9541 12.7396C77.9541 14.5786 75.6811 15.4428 74.4593 14.0683L61.9541 5.42422e-06L49.4489 14.0683C48.2271 15.4428 45.9541 14.5786 45.9541 12.7396L45.9541 6.82299e-06L-8.74228e-06 1.08404e-05L0.00413513 100L45.9541 100L58.9645 85.3633C60.5556 83.5733 63.3526 83.5733 64.9437 85.3633L77.9541 100L123.996 100L124 0L77.9541 4.02546e-06Z"
        fill="currentColor"
      />
    </motion.g>

    <motion.g id="hat" variants={hat} initial="start" animate="end">
      <path
        d="M360.273 37.8778C360.273 36.7732 359.377 35.8778 358.273 35.8778H328V0H457L426 35.8778H405.935C404.83 35.8778 403.935 36.7732 403.935 37.8778V61.5L370 100H360.273V37.8778Z"
        fill="currentColor"
      />
      <path
        d="M278.5 100L218 100L296.488 9.9211C296.488 9.9211 303.998 0.0143661 318.423 0.0143661H331.978H344V100L290.5 100V92.1153C290.5 90.2947 288.265 89.4209 287.03 90.7587L278.5 100Z"
        fill="currentColor"
      />
      <path
        d="M172.5 89C172.5 87.8954 173.395 87 174.5 87H189.5C190.605 87 191.5 87.8954 191.5 89L191.5 99.9856L212.5 99.9856L236.305 73V-1.52588e-05L191.5 -2.28882e-05L191.5 11C191.5 12.1045 190.605 13 189.5 13L174.5 13C173.395 13 172.5 12.1045 172.5 11L172.5 -1.52588e-05H137.5H128V99.9856L137.5 99.9856L150 99.9856L172.5 99.9856L172.5 89Z"
        fill="currentColor"
      />
    </motion.g>
  </svg>
);
