import React from "react";
import Section from "../../UI/Section/Section";
import H2 from "../../UI/H2/H2";
import LittleDivider from "../../UI/LittleDivider/LittleDivider";
import H3 from "../../UI/H3/H3";

const SectionServices = () => {
  return (
    <Section className="bg-red-200">
      <div className="flex flex-col justify-center items-center">
        <H2>Nos services</H2>
        <LittleDivider />
        <H3>Racontez nous votre histoire</H3>
      </div>
      <div className="relative w-full h-[480px]">
        <img
          src="/assets/images/__illustration1.jpg"
          alt="test"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </Section>
  );
};

export default SectionServices;
