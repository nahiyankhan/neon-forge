"use client";

import { What, The, Forge, Cross } from "../logo";
import { WTF } from "../wtf";

export const Intro = () => {
  return (
    <div className="flex h-screen items-center text-textProminent relative">
      <WTF />

      {/* <div className="w-full">
        <What className="h-[calc(80vh/3)]" />
      </div>
      <div className="w-full">
        <The className="h-[calc(80vh/3)]" />
      </div>
      <div className="w-full">
        <Forge className="h-[calc(80vh/3)]" />
      </div>

      <div className="absolute overflow-hidden w-screen">
        <div className="text-divider w-max">
          <Cross className="w-full h-[calc(80vh+22px)]" />
        </div>
      </div> */}
    </div>
  );
};
