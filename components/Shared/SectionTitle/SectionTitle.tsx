import React from "react";
import H2 from "../../UI/H2/H2";
import LittleDivider from "../../UI/LittleDivider/LittleDivider";
import H3 from "../../UI/H3/H3";

type Props = {
  title: string;
  subTitle: string;
};

const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <H2>{title}</H2>
      <LittleDivider />
      <H3>{subTitle}</H3>
    </div>
  );
};

export default SectionTitle;
