import React from "react";

type Props = { children: string };

const P = ({ children }: Props) => {
  return (
    <p className="w-[70%] tracking-widest font-thin font-sans text-stone-500 xl:text-[1.2rem]">
      {children}
    </p>
  );
};

export default P;
