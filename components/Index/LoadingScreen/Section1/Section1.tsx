import React from "react";

import styles from "./Section1.module.css";
import Image from "next/image";
import { getWindowEffectTranslateY } from "../../../../utils/functions";
import LittleDivider from "../../../UI/LittleDivider/LittleDivider";
import H2 from "../../../UI/H2/H2";
import H3 from "../../../UI/H3/H3";
import P from "../../../UI/P/P";
import A from "../../../UI/Anchor/Anchor";

const img1 =
  "https://static.wixstatic.com/media/c49135_fe230beccf0a4b6fbba1941e2660ff99~mv2.png/v1/fill/w_930,h_973,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c49135_fe230beccf0a4b6fbba1941e2660ff99~mv2.png";

const img2 = "https://wallpapers.com/images/hd/anime-city-43g4mfdzm6c5jzb8.jpg";

const Section1 = () => {
  React.useEffect(() => {
    const imgEl = document.getElementById("image")! as HTMLImageElement;

    const imgContainerEl = document.getElementById(
      "image-container"
    )! as HTMLImageElement;

    window.addEventListener("scroll", () => {
      const translateYY = getWindowEffectTranslateY(
        imgContainerEl,
        imgEl,
        window.innerHeight
      );

      (imgEl as HTMLElement).style.transform = `translateY(${translateYY}%)`;
    });
  }, []);

  return (
    <section className="h-[620px] w-full bg-white flex justify-center items-center flex-col gap-8 lg:flex-row lg:h-[420px] xl:h-[600px]">
      <div className="flex flex-col flex-1 justify-center items-center gap-6">
        <div className="flex justify-center items-center flex-col gap-2">
          <H2>Qui sommes-nous</H2>
          <LittleDivider />
          <H3>Ensemble, créons lunique</H3>
        </div>
        <P>
          AS Luxury est une agence événementielle de prestige spécialisée dans
          la production dévénements et de mariages extraordinaires, la
          scénographie et la décoration florale, en France et dans le monde
          entier.
        </P>
        <A drawingIsDisplay={true}>En savoir plus</A>
      </div>
      <div
        id="image-container"
        className="relative flex-1 h-full min-h-[200px] w-full overflow-hidden"
      >
        <img
          id="image"
          className="object-contain absolute bottom-0 left-0 w-full"
          src={img1}
          alt="illustration mariage"
        />
      </div>
    </section>
  );
};

export default Section1;
