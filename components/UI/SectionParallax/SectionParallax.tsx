import React from "react";

import Image from "next/image";
import { getWindowEffectTranslateY } from "../../../utils/functions";
import P from "../../UI/P/P";
import A from "../../UI/Anchor/Anchor";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

type Props = {
  imageId: string;
  title: string;
  subTitle: string;
  paragraphe: string;
  link: string;
  image: string;
  reverse?: boolean;
};

const SectionParallax = ({
  imageId,
  title,
  subTitle,
  paragraphe,
  link,
  image,
  reverse = false,
}: Props) => {
  React.useEffect(() => {
    const imgEl = document.getElementById(imageId)! as HTMLImageElement;

    const imgContainerEl = document.getElementById(
      imageId + "-container"
    )! as HTMLImageElement;

    window.addEventListener("scroll", () => {
      const translateYY = getWindowEffectTranslateY(
        imgContainerEl,
        imgEl,
        window.innerHeight
      );

      (imgEl as HTMLElement).style.transform = `translateY(${translateYY}%)`;
    });
  }, [imageId]);

  return (
    <section
      className={`h-[620px] w-full bg-white flex justify-center items-center flex-col gap-8 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:h-[420px] xl:h-[600px]`}
    >
      <div className="flex flex-col flex-1 justify-center items-center gap-6">
        <SectionTitle title={title} subTitle={subTitle} />
        <P>{paragraphe}</P>
        <A drawingIsDisplay={true}>En savoir plus</A>
      </div>
      <div
        id={imageId + "-container"}
        className="relative flex-1 h-full min-h-[200px] w-full overflow-hidden"
      >
        <img
          id={imageId}
          className="object-contain absolute bottom-0 left-0 w-full"
          src={image}
          alt={title}
        />
      </div>
    </section>
  );
};

export default SectionParallax;
