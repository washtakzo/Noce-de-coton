import React from "react";
import styles from "./LoadingScreen.module.css";
import Image from "next/image";

import weeding_logo from "../../../public/assets/images/weeding-logo.png";

const LoadingScreen = () => {
  return (
    <div className="fixed w-full h-full z-10">
      <div
        className={`absolute inline-block left-0 w-[50%] h-[100vh] bg-white ${styles.panel}`}
      ></div>
      <div
        className={`absolute inline-block right-0 w-[50%] h-[100vh] bg-white ${styles.panel}`}
      ></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center h-full w-full bg-transparent">
        <div className={`relative w-72 h-72 object-cover ${styles.logo}`}>
          <Image src={weeding_logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
