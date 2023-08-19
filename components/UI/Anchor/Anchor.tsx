import React from "react";

type Props = {
  children: string;
  href?: string;
  drawingIsDisplay: boolean;
  className?: string;
};

const A = ({ children, href, drawingIsDisplay, className }: Props) => {
  return (
    <div
      className={`flex justify-between items-center w-[50%] m-auto ${className}`}
    >
      <a href={href} className="italic">
        {children}
      </a>
      {drawingIsDisplay && <span className="w-[50%] h-[1px] bg-slate-700" />}
    </div>
  );
};

export default A;
