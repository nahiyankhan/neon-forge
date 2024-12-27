import { motion } from "framer-motion";

const f = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
};

const orge = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: "easeInOut",
      delay: 3.5,
    },
  },
};

export const Forge = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={"100%"}
    fill="none"
    viewBox="0 0 541 100"
    {...props}
  >
    <motion.g id="f" variants={f} initial="start" animate="end">
      <path
        d="M125 4.02086e-05L15 0H0V36.7896H15V99.9999L60.695 100V76.2311C60.695 75.759 60.862 75.3021 61.1665 74.9412L87.3859 43.8729L62.695 43.8729C61.5904 43.8729 60.695 42.9775 60.695 41.8729V38.7896C60.695 37.685 61.5904 36.7896 62.695 36.7896H94L125 4.02086e-05Z"
        fill="currentColor"
      />
    </motion.g>

    <motion.g id="orge" variants={orge} initial="start" animate="end">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M159.503 0.0170898C181.816 0.0170898 200.964 7.88532 212.231 21V79.0137C200.971 92.1205 181.835 99.9835 159.503 99.9835C123.64 99.9835 96 79.7071 96 50.0003C96 46.5326 96.3769 43.1934 97.0997 40L125 7.33857C134.85 2.62427 146.651 0.0170898 159.503 0.0170898ZM159.677 35.5204C147.753 35.5204 143.711 40.5117 143.711 49.964C143.711 59.4163 147.753 64.4075 159.677 64.4075C171.601 64.4075 175.643 59.4163 175.643 49.964C175.643 40.5117 171.516 35.5204 159.677 35.5204Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M326 41C326 9.5 301.059 0 276.554 0H216V100L265.554 100V92.4483C265.554 90.5845 267.879 89.7338 269.082 91.1574L276.554 100L326 100L308.381 77.7566C319.04 70.9843 326 59.6195 326 41ZM283.213 45.4984C281.999 46.691 280.326 47.4029 278.549 47.4826H267.01C265.905 47.4826 265.01 46.5872 265.01 45.4826V37C265.01 35.8954 265.905 35 267.01 35H278.549C280.286 35.0378 281.938 35.6968 283.152 36.836C284.367 37.9753 285.046 39.5044 285.045 41.0966C285.084 42.7265 284.426 44.3058 283.213 45.4984Z"
        fill="currentColor"
      />
      <path
        d="M375.172 50.0177C375.172 37.7605 380.108 33.7624 392.339 33.7624C399.668 33.7624 405.838 34.9968 409.844 40.4083C410.677 41.533 412.368 41.7597 413.305 40.7207L436.957 14.5C427.947 6.36186 414.129 0 393.389 0C368.932 0 348.168 9.46608 337.5 25C337.5 25 330 35.9936 330 51C330 65 337.5 74.9666 337.5 74.9666C348.171 90.4841 368.944 99.9879 393.432 100C404.014 100 412.805 98.2767 420.076 95.5C421.615 94.9122 422.768 94.4164 423.629 94L426.5 92.5L432.5 100H447.5V50.0177H393.5L404.429 64C402.24 65.1042 399.777 65.7668 397.161 66.0656C396.036 66.1941 394.882 66.2553 393.71 66.2553C378.565 66.2023 375.172 61.1268 375.172 50.0177Z"
        fill="currentColor"
      />
      <path
        d="M541 0L451 4.02086e-05V100L541 100V67.4589L498.695 67.4589C497.59 67.4589 496.695 66.5635 496.695 65.4589V64.0652C496.695 62.9606 497.59 62.0652 498.695 62.0652L523.386 62.0652V36.8729L498.695 36.873C497.59 36.873 496.695 35.9775 496.695 34.873V33.7897C496.695 32.6851 497.59 31.7897 498.695 31.7897L541 31.7896V0Z"
        fill="currentColor"
      />
    </motion.g>
  </svg>
);