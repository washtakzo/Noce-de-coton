import React from "react";

type Props = { children: React.ReactNode; className?: string };

const Section = ({ children, className }: Props) => {
  return (
    <section
      className={`h-[620px] w-full bg-white flex justify-center items-center flex-col gap-8 lg:flex-row lg:h-[420px] xl:h-[600px] ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
