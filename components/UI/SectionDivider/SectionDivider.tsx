import React from "react";
import Section from "../Section/Section";

const SectionDivider = () => {
  return (
    <Section className="h-[260px] sm:h-[360px] xl:h-[580px]">
      <div className="h-[50%] w-[1px] bg-slate-600" />
    </Section>
  );
};

export default SectionDivider;
