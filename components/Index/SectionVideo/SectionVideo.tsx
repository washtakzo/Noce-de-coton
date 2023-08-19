import React from "react";

import styles from "./SectionVideo.module.css";
import Header from "../../Shared/Header/Header";

const SectionVideo = () => {
  return (
    <div
      className={`relative w-full aspect-[16/12] overflow-hidden lg:aspect-video xl:aspect-[22/9] bg-red-50 ${styles.transparent}`}
    >
      <Header className="absolute top-0 left-0 w-full z-10" />
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className="h-full object-cover w-full fixed top-0 -z-10"
      >
        <source src="assets/videos/_dark_wedding.mp4" type="video/mp4" />
        Video not supported
      </video>
      <h1 className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-[60px] text-white font-serif">
        Noce de coton
      </h1>
    </div>
  );
};

export default SectionVideo;
