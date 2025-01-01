import { motion } from "framer-motion";
import { Props } from "./types";

const firstLetter = {
  start: {
    opacity: 0,
  },
  end: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 0.01,
      type: "spring",
      bounce: 0.15,
    },
  },
};

const firstLetterDelays = [1, 1.5, 2];

const w = {
  ...firstLetter,
  end: {
    ...firstLetter.end,
    transition: {
      ...firstLetter.end.transition,
      delay: firstLetterDelays[0],
    },
  },
};

const t = {
  ...firstLetter,
  end: {
    ...firstLetter.end,
    transition: {
      ...firstLetter.end.transition,
      delay: firstLetterDelays[1],
    },
  },
};

const f = {
  ...firstLetter,
  end: {
    ...firstLetter.end,
    transition: {
      ...firstLetter.end.transition,
      delay: firstLetterDelays[2],
    },
  },
};

const cross = {
  start: {
    pathLength: 0,
  },
  end: {
    pathLength: 1,
    transition: {
      pathLength: { ease: "easeIn", duration: 1 },
    },
  },
};

const remainingLetters = {
  start: {
    translateX: "-100%",
    opacity: 0,
  },
  end: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.15,
      delay: 3,
    },
  },
};

export const WTF = ({ className }: Props) => {
  return (
    <svg
      width="100%"
      // height="859"
      viewBox="0 0 1920 859"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <clipPath id="clip-left">
          <path d="M0.500063 1L0.499969 857.522H127.97L885.573 1H0.500063Z" />
        </clipPath>
      </g>

      <g>
        <clipPath id="clip-right">
          <path d="M881.318 22.5602L141.608 857.522H1920V1H929.222C910.904 1 893.465 8.84902 881.318 22.5602Z" />
        </clipPath>
      </g>

      <g id="wtf">
        <g id="forge">
          <g clipPath="url(#clip-left)">
            <motion.path
              id="f"
              d="M373.273 579.275L42.1945 579.275H0.457458V706.808L57.6426 706.808C58.7472 706.808 59.6426 707.704 59.6426 708.808V857.522H127.507L243.889 726.517H183.318C182.213 726.517 181.318 725.622 181.318 724.517V708.808C181.318 707.704 182.213 706.808 183.318 706.808H261.055L373.273 579.275Z"
              fill="currentColor"
              variants={f}
              initial="start"
              animate="end"
            />
          </g>
          <g clipPath="url(#clip-right)">
            <motion.g variants={remainingLetters} initial="start" animate="end">
              <path
                id="o"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M434.436 579.275C414.304 579.275 387.904 579.275 387.904 579.275L295.313 683.928C295.313 683.928 295.313 704.435 295.313 718.398C295.313 807.716 345.119 857.522 434.436 857.522H467.826C557.143 857.522 606.949 807.716 606.949 718.398C606.949 671.116 606.949 579.275 606.949 579.275C606.949 579.275 509.861 579.275 467.826 579.275H434.436ZM446.659 679.444C422.735 679.444 409.394 692.891 409.394 717.007C409.394 741.123 422.735 754.57 446.659 754.57H455.603C479.527 754.57 492.868 741.123 492.868 717.007C492.868 692.891 479.527 679.444 455.603 679.444H446.659Z"
                fill="currentColor"
              />
              <path
                id="r"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M924.151 693.356C924.151 614.056 854.754 579.275 786.569 579.275H618.079V857.522L755.963 857.522V836.509C755.963 831.323 762.431 828.956 765.779 832.917L786.569 857.522L924.151 857.522L875.128 795.63C904.786 776.786 924.151 745.164 924.151 693.356ZM805.097 708.655C801.721 711.974 797.065 713.954 792.119 714.176H760.013C756.939 714.176 754.448 711.685 754.448 708.611V685.009C754.448 681.935 756.939 679.444 760.013 679.444H792.119C796.954 679.549 801.551 681.382 804.929 684.552C808.307 687.722 810.197 691.977 810.196 696.407C810.302 700.943 808.472 705.337 805.097 708.655Z"
                fill="currentColor"
              />
              <path
                id="g"
                d="M1054.93 718.447C1054.93 691.965 1064.67 679.444 1098.05 679.444C1124.49 679.444 1130.05 687.791 1139.79 703.095L1216.7 616.784C1193.58 594.729 1155.32 579.275 1093.88 579.275C1009.02 579.275 989.539 601.535 971.453 621.012C953.367 640.489 940.846 661.358 940.846 721.181C940.846 772.656 961.714 803.264 961.714 803.264C1002.02 857.465 1049.11 857.488 1117.13 857.522L1117.34 857.522C1156.49 856.13 1175.96 850.565 1205.18 831.088L1226.05 857.522H1252.48V718.447H1117.53L1132.84 739.267C1125.88 749.005 1120.31 754.57 1098.05 754.57C1073.01 754.57 1054.93 747.614 1054.93 718.447Z"
                fill="currentColor"
              />
              <path
                id="e"
                d="M1547.42 579.275H1263.61V857.521L1547.42 857.522V766.977L1420.17 766.977C1419.06 766.977 1418.17 766.082 1418.17 764.977V753.969C1418.17 752.865 1419.06 751.969 1420.17 751.969L1492.09 751.969V681.873L1420.17 681.873C1419.06 681.873 1418.17 680.977 1418.17 679.873V669.728C1418.17 668.624 1419.06 667.728 1420.17 667.728L1547.42 667.728V579.275Z"
                fill="currentColor"
              />
            </motion.g>
          </g>
        </g>
        <g id="the">
          <g clipPath="url(#clip-right)">
            <motion.g variants={remainingLetters} initial="start" animate="end">
              <path
                id="e_2"
                d="M1157.88 289.899H874.066V568.146L1157.88 568.146V477.601L1030.62 477.601C1029.52 477.601 1028.62 476.706 1028.62 475.601V464.593C1028.62 463.489 1029.52 462.593 1030.62 462.593L1102.54 462.593V392.497L1030.62 392.497C1029.52 392.497 1028.62 391.601 1028.62 390.497V380.353C1028.62 379.248 1029.52 378.353 1030.62 378.353L1157.88 378.353V289.899Z"
                fill="currentColor"
              />
              <path
                id="h"
                d="M682.076 537.573C682.076 534.5 684.723 532.008 687.989 532.008H726.595C729.861 532.008 732.509 534.5 732.509 537.573V568.146H862.936V289.899L732.509 289.899V320.511C732.509 323.585 729.861 326.076 726.595 326.076L687.989 326.076C684.723 326.076 682.076 323.585 682.076 320.511L682.076 289.899H644.161L551.3 394.796V568.146H682.076L682.076 537.573Z"
                fill="currentColor"
              />
            </motion.g>
          </g>
          <g clipPath="url(#clip-left)">
            <motion.g
              variants={{
                start: { opacity: 1, translateX: 0 },
                end: {
                  opacity: 1,
                  translateX: "-100%",
                  transition: {
                    duration: 1,
                    type: "spring",
                    bounce: 0.15,
                    delay: 3,
                  },
                },
              }}
              initial="start"
              animate="end"
            >
              <motion.path
                id="t"
                d="M59.1132 423.117C59.1132 420.044 56.625 417.552 53.5556 417.552H0V289.899H372.851L260.764 417.552H211.191C208.122 417.552 205.634 420.044 205.634 423.117V480.12L127.747 568.146H59.1132V423.117Z"
                fill="currentColor"
                variants={t}
                initial="start"
                animate="end"
              />
            </motion.g>
            <motion.path
              id="t"
              d="M315.472 423.117C315.472 420.044 312.984 417.552 309.914 417.552H256.359V289.899H629.209L517.123 417.552H467.55C464.481 417.552 461.992 420.044 461.992 423.117V480.12L384.105 568.146H315.472V423.117Z"
              fill="currentColor"
              variants={{
                ...remainingLetters,
                start: {
                  ...remainingLetters.start,
                  translateX: "100%",
                },
              }}
              initial="start"
              animate="end"
            />
          </g>
        </g>
        <g id="what">
          <g clipPath="url(#clip-right)">
            <motion.g variants={remainingLetters} initial="start" animate="end">
              <path
                id="t_2"
                d="M1093.33 133.74C1093.33 130.666 1090.84 128.175 1087.77 128.175H1034.14V0.521729H1407.48L1295.25 128.175H1245.61C1242.54 128.175 1240.05 130.666 1240.05 133.74V190.743L1162.06 278.768H1093.33V133.74Z"
                fill="currentColor"
              />
              <path
                id="a"
                d="M829.143 278.769H654.03L882.429 20.753C893.817 7.88808 910.174 0.522491 927.356 0.522491H1022.99V278.769H875.163V233.811C875.163 231.988 872.924 231.115 871.691 232.457L829.143 278.769Z"
                fill="currentColor"
              />
            </motion.g>
          </g>
          <g clipPath="url(#clip-left)">
            <motion.path
              id="w"
              d="M230.905 0.52173V35.9304C230.905 41.0461 224.588 43.4515 221.191 39.6296L186.423 0.521733L151.656 39.6296C148.259 43.4515 141.942 41.0461 141.942 35.9304V0.521737L0.371613 0.521729L0.383133 278.768H141.942L178.119 238.114C182.542 233.145 190.305 233.145 194.728 238.114L230.905 278.768L373.211 278.768L373.222 0.521908L230.905 0.52173Z"
              fill="currentColor"
              variants={w}
              initial="start"
              animate="end"
            />
            <motion.path
              id="h_2"
              d="M565.213 31.0941C565.213 34.1675 562.565 36.659 559.299 36.659L520.693 36.659C517.427 36.659 514.78 34.1675 514.78 31.0941V0.521745L384.352 0.521734L384.352 278.768L514.78 278.768V248.156C514.78 245.083 517.427 242.591 520.693 242.591L559.299 242.591C562.565 242.591 565.213 245.083 565.213 248.156L565.213 278.768H639.37L695.989 215.202V0.52174L565.213 0.521729L565.213 31.0941Z"
              fill="currentColor"
              variants={{
                ...remainingLetters,
                start: {
                  ...remainingLetters.start,
                  translateX: "100%",
                },
              }}
              initial="start"
              animate="end"
            />
          </g>
        </g>
        <g id="cross" className="text-divider">
          <motion.path
            id="cross_right"
            d="M1920 1H929.222C910.905 1 893.465 8.84902 881.318 22.5602L141.608 857.522H1920"
            stroke="currentColor"
            variants={cross}
            initial="start"
            animate="end"
          />
          <motion.path
            id="cross_left"
            d="M0 1L885.715 1.00016L126.905 857.522H0"
            stroke="currentColor"
            variants={cross}
            initial="start"
            animate="end"
          />
        </g>
      </g>
    </svg>
  );
};
