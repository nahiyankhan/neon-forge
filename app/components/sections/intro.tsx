"use client";

import { What, The, Forge, Cross } from "../logo";

export const Intro = () => {
  return (
    <div className="flex flex-col h-screen items-start justify-center gap-2 text-textProminent relative">
      <div className="w-full">
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
      </div>
    </div>
  );
};
