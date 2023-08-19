import React from "react";

type Props = { children: string; className?: string };

const P = ({ children, className }: Props) => {
  return (
    <p
      className={`w-[70%] tracking-widest font-thin font-sans text-stone-500 xl:text-[1.2rem] ${className}`}
    >
      {children}
    </p>
  );
};

export default P;
