import React from "react";

type Props = { children: string };

const H3 = ({ children }: Props) => {
  return (
    <h3 className="text-2xl tracking-wide 2xl:text-3xl text-center">
      {children}
    </h3>
  );
};

export default H3;
