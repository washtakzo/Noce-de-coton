import React from "react";

type Props = { children: string };

const H3 = ({ children }: Props) => {
  return (
    <h3 className="text-xl tracking-wide xl:text-[1.4rem] text-center">
      {children}
    </h3>
  );
};

export default H3;
