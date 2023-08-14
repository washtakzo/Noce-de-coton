import React from "react";

import styles from "./Section1.module.css";
import Image from "next/image";

const img1 =
  "https://static.wixstatic.com/media/c49135_fe230beccf0a4b6fbba1941e2660ff99~mv2.png/v1/fill/w_930,h_973,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c49135_fe230beccf0a4b6fbba1941e2660ff99~mv2.png";

const Section1 = () => {
  React.useEffect(() => {
    const imgEl = document.getElementById("image")! as HTMLImageElement;
    const imgContainerEl = document.getElementById(
      "image-container"
    )! as HTMLImageElement;

    const intersectionObserver = new IntersectionObserver((entries, _) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          (entry.target as HTMLElement).addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            console.log(scrollY);
          });

          window.addEventListener("scroll", () => {
            if (entry.intersectionRatio > 0) {
              //--------------------------------------

              //Scroll Y in document (px) : window.scrollY  //référence = top of the window

              //Element Coord Y (px) : element.getBoundingClientRect().y
              //Par rapport a la fenetre non pas tout le document
              // = 0 lorsque le top de element aligné au top de la window

              //Element Height (px) : element.offsetHeight  //fix
              //Window Height (px) : window.innerHeight   //fix

              // TODO:récupérer la position de l'image en pourcentage par rapport au top de la window
              const imgContainerHeight = imgContainerEl.offsetHeight;

              const imageHeight = imgEl.offsetHeight;

              const containerPosition =
                // imgContainerEl.getBoundingClientRect().y;  //save
                imgContainerEl.getBoundingClientRect().y + imgContainerHeight;

              // let containerPositionPrCent = 100 - (containerPosition * 100) / window.innerHeight;  //save
              let containerPositionPrCent =
                100 -
                (containerPosition * 100) /
                  (window.innerHeight + imgContainerHeight);

              if (containerPositionPrCent < 0) containerPositionPrCent = 0;
              if (containerPositionPrCent > 100) containerPositionPrCent = 100;
              console.log({ containerPosition });

              const maxTranslateY =
                100 - (imgContainerHeight * 100) / imageHeight;

              let translateYY = (maxTranslateY * containerPositionPrCent) / 100;

              if (translateYY > maxTranslateY) translateYY = maxTranslateY;

              console.log({ containerPositionPrCent });

              (
                entry.target as HTMLElement
              ).style.transform = `translateY(${translateYY}%)`;
            }
          });
        }

        //style = "transform: translate3d(0px, 15.8296px, 0px)";
      });
    });

    intersectionObserver.observe(imgEl);
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
