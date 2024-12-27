"use client";

import { What, The, Forge } from "../logo";

export const Intro = () => {
  return (
    <div className="flex flex-col h-screen items-start justify-center gap-3 text-textProminent">
      <div className="w-full border-b">
        <What className="h-[calc(80vh/3)]" />
      </div>
      <div className="w-full border-b">
        <The className="h-[calc(80vh/3)]" />
      </div>
      <div className="w-full border-b">
        <Forge className="h-[calc(80vh/3)]" />
      </div>
    </div>
  );
};
