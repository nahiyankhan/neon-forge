import { motion } from "framer-motion";
import { Props } from "./types";

export const Cross = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 931 310"
      fill="none"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M930.899 1H336.166C328.156 1 320.529 4.43083 315.215 10.4247L50.5 309H930.899"
        stroke="currentColor"
        className="stroke-1"
        vectorEffect="non-scaling-stroke"
      />

      {/* <path
        d="M930.899 0.776123H334.372C327.503 0.776123 320.963 3.7194 316.408 8.8609L50.5 309H930.899"
        stroke="currentColor"
      /> */}

      {/* <path
        d="M50.5 309L323.338 1"
        stroke="currentColor"
      /> */}
    </svg>
  );
};
