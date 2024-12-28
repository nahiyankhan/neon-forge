"use client";

import { What, The, Forge } from "../logo";

export const Intro = () => {
  return (
    <div className="flex flex-col h-screen items-start justify-center gap-3 text-textProminent">
      <div className="w-full border-y">
        <What className="h-[calc(80vh/3)]" />
      </div>
      <div className="w-full border-y">
        <The className="h-[calc(80vh/3)]" />
      </div>
      <div className="w-full border-y">
        <Forge className="h-[calc(80vh/3)]" />
      </div>
    </div>
  );
};
