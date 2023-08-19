import Image from "next/image";
import React from "react";

type Props = { className?: string };

const img2 = "https://wallpapers.com/images/hd/anime-city-43g4mfdzm6c5jzb8.jpg";

const items = [
  { title: "Histoire", link: "" },
  { title: "Service", link: "" },
  { title: "Portfolio", link: "" },
  { title: "Contact", link: "" },
];

const Header = ({ className }: Props) => {
  return (
    <header
      className={`flex flex-col justify-center items-center ${className}`}
    >
      <nav className="w-full px-20 py-6 md:px-28 lg:px-36 xl:px-52">
        <ul className="flex justify-around items-center gap-8">
          {items.map((item) => (
            <li
              key={item.title}
              className="text-white font-serif uppercase tracking-widest text-xs cursor-pointer sm:text-sm md:text-lg  transition duration-300 hover:scale-105"
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
