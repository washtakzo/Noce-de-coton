import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import P from "../../UI/P/P";

const Testimony = () => {
  return (
    <div className="w-[400px] lg:w-[none] flex flex-col justify-center items-center gap-4">
      <h5 className="uppercase text-center text-xl">Audrey</h5>
      <h6 className="italic text-center text-lg">Marié le 10/10/23</h6>
      <P>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        perferendis obcaecati veritatis. Quisquam quas atque natus odio
        accusamus doloremque eaque perspiciatis, soluta voluptate voluptates.
        Fugiat necessitatibus laborum quam architecto non?
      </P>
      <div className="flex">
        {new Array(5).fill(null).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

const SectionTestimonies = () => {
  return (
    <section>
      <SectionTitle
        title="Temoignages"
        subTitle="Parce que vous en parlez le mieux"
      />
      <div className="flex flex-col justify-center items-center gap-16 mt-16 lg:flex-row lg:justify-around lg:gap-4 xl:px-[120px] 2xl:max-w-[2400px] 2xl:mx-auto">
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
    </section>
  );
};

export default SectionTestimonies;
