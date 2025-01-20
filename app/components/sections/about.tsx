"use client";

import { ReactNode } from "react";

const StrikeThrough = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`text-textSubtle relative transition-all [&::after]:content-[''] [&::after]:absolute [&::after]:transition-all [&::after]:left-0 [&::after]:top-[50%] [&::after]:mt-[-1px] [&::after]:h-[2px] [&::after]:w-full [&::after]:bg-bg ${className}`}
    >
      {children}
    </span>
  );
};

export const About = () => {
  return (
    <div className="w-full pt-40 pb-60 text-textStandard ">
      <div className="font-mono text-lg mb-2">
        THE <StrikeThrough>NEON</StrikeThrough> FORGE
      </div>
      <div className="mb-3 pb-3 border-b">
        /T͟Hə/ <StrikeThrough>/ˈnēˌän/</StrikeThrough> /fôrj/
      </div>
      <div className="">
        place to craft (something) strong, enduring{" "}
        <StrikeThrough>with kickass vibes</StrikeThrough>
      </div>
    </div>
  );
};
