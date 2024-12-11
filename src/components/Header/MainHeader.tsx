import React from "react";
import Image from "next/image";

const MainHeaderSection = () => {
  return (
    <div className="flex items-center lg:w-[1240px] lg:h-[41px] lg:top-[62px] lg:left-[100px] lg:gap-10 lg:mx-[100px] my-4 md:justify-center">
        <Image
        src="images/Vector.svg" 
        width={24}
        height={24}
        alt="Menu Icon"
        className="lg:hidden flex top-[54px] left-4 items-center"
        />

        <h3 className="flex items-center lg:w-[160px] lg-h-[22px] lg:text-[32px] lg:mb-2 lg:leading-[38.4px] font-integral font-bold text-[#000000] md:w-[126px] md:h-[18px] md:top-[54px] md:left-14 md:text-[25.2px] md:leading-[30.24px] md:ml-5">
            SHOP.CO
        </h3>

        <div className="hidden lg:flex items-center w-[321px] h-[22px] gap-6">
            <div className="flex w-[57px] h-[22px] gap-2">
                <p className="flex w-[37px] h-[22px] font-satoshi text-[16px] leading-[21.6px] text-[#000000]">
                    Shop
                </p>

                <Image 
                src="images/list.svg"
                width={16}
                height={16}
                alt="List Icon"
                className="flex self-center"
                />
            </div>

            <p className="flex w-[56px] h-[22px] font-satoshi text-[#000000] text-[16px] leading-[21.6px] whitespace-nowrap">
                On Sale
            </p>

            <p className="flex w-[87px] h-[22px] font-satoshi text-[#000000] text-[16px] leading-[21.6px] whitespace-nowrap">
                New Arrivals
            </p>

            <p className="flex w-[49px] h-[22px] font-satoshi text-[#000000] text-[16px] leading-[21.6px] whitespace-nowrap">
                Brands
            </p>
        </div>

        <div className="hidden lg:flex w-[577px] h-12 rounded-r-[62px] rounded-l-[62px] px-4 py-3 gap-3 bg-[#F0F0F0]">
            <Image
            src="images/search.svg"
            width={24}
            height={24}
            alt="Search Icon"
            />

            <p className="flex w-[151px] h-[22px] font-satoshi text-[16px] leading-[21.6px] text-[#00000066]">
                Search for products...
            </p>
        </div>

        <div className="flex items-center lg:w-[62px] lg:h-6 lg:gap-[14px] md:w-24 md:top-[54px] md:left-[278px] md:gap-3 md:ml-24">
            <Image 
                src="images/search-1.svg"
                width={24}
                height={24}
                alt="Search Icon"
                className="block lg:hidden"
            />

            <Image
                src="images/cart.svg"
                width={24}
                height={24}
                alt="Cart Icon"
            />

            <Image 
                src="images/account.svg"
                width={24}
                height={24}
                alt="Account Icon"
            />
        </div>
    </div>
  );
};

export default MainHeaderSection;