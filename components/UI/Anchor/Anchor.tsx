import React from "react";

type Props = { children: string; href?: string; drawingIsDisplay: boolean };

const A = ({ children, href, drawingIsDisplay }: Props) => {
  return (
    <div className="flex justify-between items-center w-[50%]">
      <a href={href} className="italic">
        {children}
      </a>
      {drawingIsDisplay && <span className="w-[50%] h-[1px] bg-slate-700" />}
    </div>
  );
};

export default A;
