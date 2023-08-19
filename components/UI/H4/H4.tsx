import React from "react";

type Props = {
  children: string;
  className?: string;
};

const H4 = ({ children, className }: Props) => {
  return (
    <h4
      className={`text-center text-3xl uppercase w-full m-auto md:text-xl ${className}`}
    >
      {children}
    </h4>
  );
};

export default H4;
