import React from "react";
import Section from "../../UI/Section/Section";
import H2 from "../../UI/H2/H2";
import LittleDivider from "../../UI/LittleDivider/LittleDivider";
import H3 from "../../UI/H3/H3";
import Image from "next/image";
import A from "../../UI/Anchor/Anchor";

const ImageCardLink = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="w-full flex flex-col gap-8 md:w-80 lg:w-96 xl:w-[24%]">
      <div className="w-full aspect-[9/12] relative">
        <Image
          src={image}
          alt={"illustration : " + title}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="text-center text-3xl uppercase w-[80%] m-auto md:text-2xl">
        {title}
      </h4>
      <A
        drawingIsDisplay={true}
        className="text-2xl w-[80%] md:text-lg md:w-full"
      >
        En savoir plus
      </A>
    </div>
  );
};

const SectionServices = () => {
  return (
    <section className="w-[90%] m-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <H2>Nos services</H2>
        <LittleDivider />
        <H3>Racontez nous votre histoire, nous vous accompagnerons</H3>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-12 mt-8 md:flex-row md:justify-between md:mt-16">
        <ImageCardLink
          image="https://static.wixstatic.com/media/c49135_295ec1bddb134c4daeef909cdc26ea14~mv2.png/v1/fill/w_350,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c49135_295ec1bddb134c4daeef909cdc26ea14~mv2.png"
          title="Art floral & decoration"
        />
        <ImageCardLink
          image="https://static.wixstatic.com/media/c49135_295ec1bddb134c4daeef909cdc26ea14~mv2.png/v1/fill/w_350,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c49135_295ec1bddb134c4daeef909cdc26ea14~mv2.png"
          title="Art floral & decoration"
        />
        <ImageCardLink
          image="https://static.wixstatic.com/media/c49135_295ec1bddb134c4daeef909cdc26ea14~mv2.png/v1/fill/w_350,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c49135_295ec1bddb134c4daeef909cdc26ea14~mv2.png"
          title="Art floral & decoration"
        />
      </div>
    </section>
  );
};

export default SectionServices;
