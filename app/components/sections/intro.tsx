"use client";

import { GridLines } from "../grid-lines";
import { NeonForge } from "../neon-forge";

export const Intro = () => {
  return (
    <div>
      {/* <GridLines columns={6} /> */}
      {/* <div className="absolute h-[10px] w-full top-[50%] bottom-[50%] translate-y-[-5px] animated-border" /> */}
      <div className="flex h-screen items-center text-textStandard relative">
        <NeonForge />
      </div>
    </div>
  );
};
