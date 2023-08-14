import Image from "next/image";
import React from "react";

type Props = {};

const img2 = "https://wallpapers.com/images/hd/anime-city-43g4mfdzm6c5jzb8.jpg";

const items = [
  { title: "Histoire", link: "" },
  { title: "Service", link: "" },
  { title: "Portfolio", link: "" },
  { title: "Contact", link: "" },
];

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="h-[100px] w-full flex justify-center items-center">
        <div className="h-full aspect-square relative">
          <Image
            src={"/assets/images/weeding-logo.png"}
            alt="logo"
            fill
            className="scale-150"
          />
        </div>
      </div>
      <nav className="w-full px-[160px] py-6">
        <ul className="flex justify-around items-center gap-8">
          {items.map((item) => (
            <li
              key={item.title}
              className="uppercase tracking-widest text-xs cursor-pointer sm:text-sm md:text-lg  transition duration-300 hover:text-accent hover:scale-105"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
