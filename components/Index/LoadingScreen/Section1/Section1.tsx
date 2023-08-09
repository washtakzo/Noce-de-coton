import React from "react";

import styles from "./Section1.module.css";

const Section1 = () => {
  React.useEffect(() => {
    const imageEl = document.getElementById("image")! as HTMLTitleElement;

    const imageContainerEl = document.getElementById(
      "image-container"
    )! as HTMLDivElement;

    const intersectionObserver = new IntersectionObserver((entries, _) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          window.addEventListener("scroll", () => {
            if (entry.intersectionRatio > 0) {
              //--------------------------------------

              //Scroll Y in document (px) : window.scrollY  //référence = top of the window

              //Element Coord Y (px) : element.getBoundingClientRect().y
              //Par rapport a la fenetre non pas tout le document
              // = 0 lorsque le top de element aligné au top de la window

              //Element Height (px) : element.offsetHeight  //fix
              //Window Height (px) : window.innerHeight   //fix

              const showCoord =
                window.innerHeight - imageContainerEl.getBoundingClientRect().y;
              console.log({ showCoord });

              let translateY = 0;
              if (showCoord > 0) {
                translateY = showCoord / 4;
              }

              //--------------------------------------

              //   (
              //     entry.target as HTMLElement
              //   ).style.transform = `translateY(-${translateY}px)`;
            }
          });
        }

        //style = "transform: translate3d(0px, 15.8296px, 0px)";
      });
    });
    intersectionObserver.observe(imageEl);
  });
  return (
    <section className={styles.wrapper}>
      <div className={"bg-green-50 h-screen flex-grow-1"}>
        <h2 id="titre" className="inline-block">
          Bienvenue
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolorem sit molestias.
        </p>
      </div>
      <div id="image-container" className={styles.header}>
        <div id="image" className={`${styles["image-container"]}`}>
          {/* <img
            src="https://assets.vogue.com/photos/6457fe35c943a2672e3e6c65/16:9/w_1920%2Cc_limit/vg-125.jpg"
            alt="test"
            className={styles.image}
          /> */}
        </div>
        <div>
          <button className={styles.button}>Button</button>
          <button className={styles.button2}>Button 2</button>
          <button className={styles.button3}>Button 3</button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
