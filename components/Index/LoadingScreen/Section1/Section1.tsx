import React from "react";

import styles from "./Section1.module.css";
import Image from "next/image";
import { getWindowEffectTranslateY } from "../../../../utils/functions";

const img1 =
  "https://static.wixstatic.com/media/c49135_fe230beccf0a4b6fbba1941e2660ff99~mv2.png/v1/fill/w_930,h_973,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c49135_fe230beccf0a4b6fbba1941e2660ff99~mv2.png";

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
    <section className="h-[480px] w-full bg-slate-50 flex justify-center items-center">
      <div className="flex flex-col flex-1 justify-center items-center gap-6">
        <div className="flex justify-center items-center flex-col gap-2">
          <h2 className="text-[1.5rem] font-serif uppercase">
            <span className="text-[3rem]">Q</span>ui sommes-nous ?
          </h2>
          <span className="w-[15%] h-[1px] bg-slate-800" />
          <h3 className="text-xl font-normal font-serif">
            Ensemble, créons lunique
          </h3>
        </div>
        <p className="w-[50%]">
          AS Luxury est une agence événementielle de prestige spécialisée dans
          la production dévénements et de mariages extraordinaires, la
          scénographie et la décoration florale, en France et dans le monde
          entier.
        </p>
        <a href="">En savoir plus</a>
      </div>
      <div
        id="image-container"
        className="relative flex-1 h-full bg-green-100 overflow-hidden"
      >
        <img
          id="image"
          className="object-contain absolute bottom-0 left-0 w-full bg-blue-300 scale-[1]"
          src={img1}
          alt="illustration mariage"
        />
      </div>
    </section>
  );
};

export default Section1;
