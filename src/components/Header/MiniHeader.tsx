import React from "react";
import Image from "next/image";

const MiniHeaderSection = () => {
  return (
    <div className="relative flex justify-center items-center lg:w-[1440px] lg:h-[38px] bg-[#000000] md:w-[390px] md:h-[34px] md:py-[9px] md:gap-[10px]">
      <p className="flex justify-center lg:w-[351px] lg:h-[19px] lg:top-[9px] lg:left-[544px] font-satoshi lg:text-[14px] lg:leading-[18.9px] text-[#FFFFFF] md:w-[301px] md:h-4 md:text-[12px] md:leading-[16.2px] whitespace-nowrap">
        Sign up and get 20% off to your first order. 
        <span className="flex underline font-satoshi font-medium lg:text-[14px] lg:leading-[18.9px] md:w-[301px] md:h-4 md:text-[12px] md:leading-[16.2px]">
        Sign Up Now
        </span>
      </p>

      <Image
      src="images/Frame.svg"
      width={20}
      height={20}
      alt="Cross Icon"
      className="absolute hidden lg:flex top-[9px] left-[1320px]"
      />
    </div>
  );
};

export default MiniHeaderSection;