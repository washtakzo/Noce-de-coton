import React from "react";
import styles from "./LoadingScreen.module.css";
import Image from "next/image";

import weeding_logo from "../../../public/assets/images/weeding-logo.png";

const LoadingScreen = () => {
  return (
    <div
      className={`fixed w-full h-full z-10 flex justify-center items-center ${styles["open-animation"]}`}
    >
      <div
        className={`relative w-[480px] h-[480px] object-cover ${styles.logo}`}
      >
        <Image src={weeding_logo} alt="logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;
