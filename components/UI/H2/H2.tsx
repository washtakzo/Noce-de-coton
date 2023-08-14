import React from "react";

type Props = { children: string };

const H2 = ({ children }: Props) => {
  const [firstLetter, ...otherLetters] = children.split("");

  return (
    <h2 className="text-[3rem] uppercase tracking-wide xl:text-[4rem] text-center">
      {firstLetter}
      <span className="text-[1.4rem] xl:text-[2rem]">
        {otherLetters.join("")}
      </span>
    </h2>
  );
};

export default H2;
