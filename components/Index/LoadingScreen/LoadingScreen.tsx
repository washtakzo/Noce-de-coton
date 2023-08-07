import React from "react";
import styles from "./LoadingScreen.module.css";
import Image from "next/image";

import weeding_logo from "../../../public/assets/images/weeding-logo.png";

const LoadingScreen = () => {
  return (
    <div className="fixed w-full h-full z-10 flex">
      <div className="w-[50%] bg-transparent relative">
        <div
          className={`absolute inline-block right-0 w-full h-[100vh] bg-white ${styles.panel}`}
        ></div>
      </div>
      <div className="w-[50%] bg-transparent relative">
        <div
          className={`absolute inline-block left-0 w-full h-[100vh] bg-white ${styles.panel}`}
        ></div>
      </div>

      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center h-full w-full bg-transparent">
        <div
          className={`relative w-[480px] h-[480px] object-cover ${styles.logo}`}
        >
          <Image src={weeding_logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
