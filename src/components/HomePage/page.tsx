import React from "react";
import MiniHeaderSection from "../Header/MiniHeader";
import MainHeaderSection from "../Header/MainHeader";
import FooterSection from "../Footer/page";
import Image from "next/image";

const HomePageSection = () => {
  return (
    <div className="flex flex-col lg:w-[1440px] bg-[#FFFFFF] md:w-[390px] md:left-[1480px] h-auto">
        <header>
            <MiniHeaderSection />
            <MainHeaderSection />
        </header>

        <main>
            {/*===== Home Main Section ======*/}
            <div className="flex lg:w-[1440px] lg:h-[663px] lg:top-[134px] bg-[#F2F0F1] md:w-[390px] md:h-[853px] md:top-[98px]"> 
                <Image 
                    src="images/Rectangle 2.svg"
                    width={1440}
                    height={663}
                    alt="Home Image"
                    className="hidden lg:flex"
                /> 

                <div className="absolute lg:w-[596px] lg:h-[2431px] lg:top-[-1750px] lg:left-[100px] lg:gap-4 md:w-[278px] md:h-[52px] md:top-[397px] md:left-14 md:justify-between flex items-center">
                    <div className="flex flex-col lg:w-[141px] lg:h-[74px] md:w-[106px] md:h-12">
                        <p className="lg:w-[107px] lg:h-[54px] font-satoshi font-bold lg:text-[40px] lg:leading-[54px] text-[#000000] md:w-16 md:h-8 md:text-[24px] md:leading-[32.4px]">
                            200+
                        </p>
                        <p className="lg:w-[141px] h-[22px] font-satoshi lg:text-[16px] leading-[22px] text-[#00000099] md:w-[106px] md:text-[12px]">
                            International Brands
                        </p>
                    </div>

                    <div className="lg:w-[2431px] border-[1px] border-[#0000001A] rotate-90 md:w-[52px]"/>

                    <div className="flex flex-col lg:w-[156px] lg:h-[74px] md:w-[117px] md:h-12">
                        <p className="lg:w-[146px] lg:h-[54px] font-satoshi font-bold lg:text-[40px] lg:leading-[54px] text-[#000000] md:w-[88px] md:h-8 md:text-[24px] md:leading-[32.4px]">
                            2,000+
                        </p>
                        <p className="lg:w-[156px] h-[22px] font-satoshi lg:text-[16px] leading-[22px] text-[#00000099] md:w-[117px] md:text-[12px]">
                            High-Quality Products
                        </p>
                    </div>

                    <div className="hidden lg:flex w-[2431px] border-[1px] border-[#0000001A] rotate-90"/>

                    <div className="md:hidden flex flex-col w-[171px] h-[74px]">
                        <p className="w-[171px] h-[54px] font-satoshi font-bold text-[40px] leading-[54px] text-[#000000]">
                            30,000+
                        </p>
                        <p className="w-[126px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#00000099]">
                            Happy Customers
                        </p>
                    </div>
                </div>

                <div className="lg:hidden absolute w-[103px] h-12 top-[461px] left-[144px] z-[1]">
                    <p className="w-[103px] h-8 font-satoshi font-bold text-[24px] leading-[32.4px] text-[#000000]">
                        30,000+
                    </p>
                    <p className="w-[95px] h-[22px] font-satoshi text-[12px] leading-[22px] text-[#00000099]">
                        Happy Customers
                    </p>
                </div>

                    <h2 className="absolute lg:w-[577px] lg:h-[173px] lg:top-[237px] lg:left-[100px] font-integral font-bold lg:text-[64px] lg:leading-[64px] text-[#000000] md:w-[315px] md:h-[93px] md:top-[138px] md:left-4 md:text-[36px] md:leading-[34px]">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h2>

                    <p className="absolute lg:w-[545px] lg:h-[33px] lg:top-[442px] lg:left-[100px] font-satoshi lg:text-[16px] lg:leading-[22px] text-[#00000099] md:w-[358px] md:h-[50px] md:top-[251px] md:left-4 md:text-[14px] md:leading-5">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <div className="absolute lg:w-[210px] h-[52px] lg:top-[507px] lg:left-[100px] rounded-r-[62px] rounded-l-[62px] px-[54px] py-4 gap-3 bg-[#000000] md:w-[358px] md:top-[325px] md:left-4 flex items-center justify-center">
                        <p className="font-satoshi font-medium text-[16px] leading-[21.6px] text-[#FFFFFF]">
                            Shop Now
                        </p>
                    </div>

                <Image
                    src="images/star.svg"
                    width={56}
                    height={56}
                    alt="Star Icon"
                    className="absolute lg:w-14 lg:h-14 lg:top-[431px] lg:left-[750px] md:w-11 md:h-11 md:top-[640px] md:left-[27px] z-[1]"
                />

                <Image
                    src="images/star.svg"
                    width={104}
                    height={104}
                    alt="Star Icon"
                    className="absolute lg:w-[104px] lg:h-[104px] lg:top-[220px] lg:left-[1255px] md:w-[76px] md:h-[76px] md:top-[543px] md:left-[293px] z-[1]"
                />

                <div className="lg:hidden absolute w-[390px] h-[448px] top-[503px]">
                    <Image 
                        src="images/homeimage2.svg"
                        width={390}
                        height={448}
                        alt="Home Image"
                    />
                </div>
            </div>

            {/*===== Home Sponsor Section ======*/}
            <div className="hidden lg:flex lg:items-center lg:w-[1440px] lg:h-[122px] lg:top-[797px] bg-[#000000]">
                <Image 
                    src="images/versage.svg"
                    width={166.48}
                    height={33.16}
                    alt="Versage Logo"
                    className="lg:w-[166.48px] lg:h-[33.16px] lg:ml-[100px]"
                />
                <Image 
                    src="images/zara-logo-1 1.svg"
                    width={91}
                    height={37.98}
                    alt="Zara Logo"
                    className="lg:w-[91px] lg:h-[37.98px] lg:ml-[100px]"
                />
                <Image 
                    src="images/gucci-logo-1 1.svg"
                    width={156}
                    height={36}
                    alt="Gucci Logo"
                    className="lg:w-[156px] lg:h-[36px] lg:ml-[100px]"
                />
                <Image 
                    src="images/prada-logo-1 1.svg"
                    width={194}
                    height={32}
                    alt="Prada Logo"
                    className="lg:w-[194px] lg:h-[32px] lg:ml-[100px]"
                />
                <Image 
                    src="images/ck-logo.svg"
                    width={206.79}
                    height={33.35}
                    alt="Calvin Klein Logo"
                    className="lg:w-[206.79px] lg:h-[33.35px] lg:ml-[100px]"
                />
        </div>

        <div className="flex flex-wrap items-center justify-center lg:hidden md:w-[390px] md:h-[146px] md:top-[951px] bg-[#000000] gap-x-4">
           <div className="flex justify-evenly w-full">
            <Image 
                src="images/versage.svg"
                width={116.74}
                height={23.25}
                alt="Versage Logo"
                className="md:w-[116.74px] md:h-[23.25px]"
            />
            <Image 
                src="images/zara-logo-1 1.svg"
                width={63.81}
                height={26.65}
                alt="Zara Logo"
                className="md:w-[63.81px] md:h-[26.65px]"
            />
            <Image 
                src="images/gucci-logo-1 1.svg"
                width={109.39}
                height={25.24}
                alt="Gucci Logo"
                className="md:w-[109.39px] md:h-[25.24px]"
            />
        </div>
            <Image 
                src="images/prada-logo-1 1.svg"
                width={127}
                height={21}
                alt="Prada Logo"
                className="md:w-[127px] md:h-[21px]"
            />
            <Image 
                src="images/ck-logo.svg"
                width={134.84}
                height={21.75}
                alt="Calvin Klein Logo"
                className="md:w-[134.84px] md:h-[21.75px]"
            />
            </div>

            {/*===== Home Arrival Section ======*/}
            <div className="flex flex-col justify-center items-center mt-16 lg:mt-12">
                <h3 className="lg:w-[403px] lg:h-[58px] font-integral font-bold lg:text-[48px] lg:leading-[57.6px] text-[#000000] md:text-[32px] md:leading-[38.4px] md:w-[269px] md:h-[38px] text-center">
                    NEW ARRIVALS
                </h3>

                <div className="flex justify-center items-start space-x-4 lg:space-x-8 mt-8">
                    {/*====== 1 Product =====*/}
                    <div className="flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage1.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="lg:w-[295px] lg:h-[298px] lg:mt-12 md:w-[198px] md:h-[200.01px] md:mt-8"
                        />

                        <h5 className="flex lg:w-[225px] lg:h-[27px] font-satoshi font-bold lg:text-[20px] lg:leading-[27px] text-[#000000] md:w-[180px] md:h-[22px] md:text-[16px] md:leading-[21.6px]">
                            T-shirts With Tape Details
                        </h5>

                        <div className="flex lg:w-[150px] lg:h-[19px] lg:gap-[13px] md:w-[127px] md:h-4 md:gap-[11px]">
                            <Image 
                                src="images/4.5stars.svg"
                                width={104}
                                height={18.49}
                                alt="4.5 Stars"
                            />

                            <p className="flex lg:w-[33px] lg:h-[19px] font-satoshi lg:text-[14px] lg:leading-[18.9px] text-[#000000] md:w-[29px] md:h-4 md:text-[12px] md:leading-[16.9px]">
                                4.5/5
                            </p>
                        </div>

                        <div className="flex lg:w-[55px] lg:h-8 lg:gap-[10px]">
                            <p className="flex lg:w-[55px] lg:h-8 font-satoshi font-bold lg:leading-[32.4px] lg:text-[24px] text-[#000000] md:w-[48px] md:h-[27px] md:text-[20px] md:leading-[27px]">
                                $120
                            </p>
                        </div>
                    </div>

                    {/*====== 2 Product =====*/}
                    <div className="flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage2.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="lg:w-[295px] lg:h-[298px] lg:mt-12 md:w-[198px] md:h-[200.01px] md:mt-8"
                        />

                        <h5 className="flex lg:w-[150px] lg:h-[27px] font-satoshi font-bold lg:text-[20px] lg:leading-[27px] text-[#000000] md:w-[120px] md:h-[22px] md:text-[16px] md:leading-[21.6px]">
                            Skinny Fit Jeans
                        </h5>

                        <div className="flex lg:w-[126.2px] lg:h-[19px] lg:gap-[13px] md:w-[127px] md:h-4 md:gap-[13px]">
                            <Image 
                                src="images/3.5stars.svg"
                                width={80.2}
                                height={18.49}
                                alt="3.5 Stars"
                            />

                            <p className="flex lg:w-[33px] lg:h-[19px] font-satoshi lg:text-[14px] lg:leading-[18.9px] text-[#000000] md:w-[29px] md:h-4 md:text-[12px] md:leading-[16.9px]">
                                3.5/5
                            </p>
                        </div>

                        <div className="flex lg:w-[200px] lg:h-8 lg:gap-[10px] ">
                            <p className="flex lg:w-[61px] lg:h-8 font-satoshi font-bold lg:leading-[32.4px] text-[#000000] md:w-[51px] md:h-[27px] md:text-[20px] md:leading-[27px]">
                                $240
                            </p>

                            <p className="flex lg:w-[61px] lg:h-8 font-satoshi font-bold lg:leading-[32.4px] text-[#00000066] md:w-[51px] md:h-[27px] md:text-[20px] md:leading-[27px] line-through">
                                $260
                            </p>

                            <div className="flex lg:w-[58px] lg:h-7 rounded-r-[62px] rounded-l-[62px] px-[14px] py-[6px] gap-3 bg-[#FF33331A] md:w-[42px] md:h-5">
                                <p className="flex lg:w-8 lg:h-4 font-satoshi font-medium lg:text-[12px] lg:leading-[16.2px] text-[#FF3333] md:w-[26px] md:h-[14px] md:text-[10px] md:leading-[13.5px]">
                                    -20%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*====== 3 Product =====*/}
                    <div className="hidden lg:flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage3.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="w-[295px] h-[298px] mt-12"
                        />

                        <h5 className="flex w-[225px] lg:h-[27px] font-satoshi font-bold text-[20px] leading-[27px] text-[#000000]">
                            Checkered Shirt
                        </h5>

                        <div className="flex w-[150px] h-[19px] gap-[13px]">
                            <Image 
                                src="images/4.5stars.svg"
                                width={104}
                                height={18.49}
                                alt="4.5 Stars"
                            />

                            <p className="flex w-[33px] h-[19px] font-satoshi text-[14px] leading-[18.9px] text-[#000000]">
                                4.5/5
                            </p>
                        </div>

                        <div className="flex w-[55px] h-8 gap-[10px]">
                            <p className="flex w-[56px] h-8 font-satoshi font-bold leading-[32.4px] text-[24px] text-[#000000]">
                                $180
                            </p>
                        </div>
                    </div>

                     {/*====== 4 Product =====*/}
                     <div className="hidden lg:flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage4.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="w-[295px] h-[298px] mt-12"
                        />

                        <h5 className="flex w-[199px] h-[27px] font-satoshi font-bold text-[20px] leading-[27px] text-[#000000]">
                            Sleeve Striped T-shirt
                        </h5>

                        <div className="flex w-[126.2px] h-[19px] gap-[13px]">
                            <Image 
                                src="images/4.5stars.svg"
                                width={80.2}
                                height={18.49}
                                alt="4.5 Stars"
                            />

                            <p className="flex lg:w-[33px] lg:h-[19px] font-satoshi lg:text-[14px] lg:leading-[18.9px] text-[#000000] md:w-[29px] md:h-4 md:text-[12px] md:leading-[16.9px]">
                                4.5/5
                            </p>
                        </div>

                        <div className="flex lg:w-[200px] lg:h-8 lg:gap-[10px] ">
                            <p className="flex lg:w-[61px] lg:h-8 font-satoshi font-bold lg:leading-[32.4px] text-[#000000] md:w-[51px] md:h-[27px] md:text-[20px] md:leading-[27px]">
                                $130
                            </p>

                            <p className="flex lg:w-[61px] lg:h-8 font-satoshi font-bold lg:leading-[32.4px] text-[#00000066] md:w-[51px] md:h-[27px] md:text-[20px] md:leading-[27px] line-through">
                                $160
                            </p>

                            <div className="flex lg:w-[58px] lg:h-7 rounded-r-[62px] rounded-l-[62px] px-[14px] py-[6px] gap-3 bg-[#FF33331A] md:w-[42px] md:h-5">
                                <p className="flex lg:w-8 lg:h-4 font-satoshi font-medium lg:text-[12px] lg:leading-[16.2px] text-[#FF3333]">
                                    -30%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex lg:w-[218px] lg:h-[52px] border-[1px] border-[#0000001A] rounded-r-[62px] rounded-l-[62px] px-[54px] py-4 gap-3 m-12 md:w-[358px] md:h-[46px] items-center justify-center">
                    <p className="flex lg:w-[52px] lg:h-[22px] font-satoshi font-medium lg:text-[16px] lg:leading-[21.6px] text-[#000000] md:w-[51px] md:h-[19px] md:text-[14px] md:leading-[18.9px] whitespace-nowrap">
                        View All
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center lg:w-[1240px] lg:ml-20 border-[1px] border-[#0000001A] md:w-[358px] my-6 ml-5"/>

            {/*====== Top Selling Section ======*/}
            <div className="flex flex-col justify-center items-center mt-16 lg:mt-24">
                <h3 className="lg:w-[346px] lg:h-[58px] font-integral font-bold lg:text-[48px] lg:leading-[57.6px] text-[#000000] md:text-[32px] md:leading-[38.4px] md:w-[231px] md:h-[38px] text-center">
                    TOP SELLING
                </h3>

                <div className="flex justify-center items-start space-x-4 lg:space-x-8 mt-8">
                    {/*====== 1 Product =====*/}
                    <div className="flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage5.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="lg:w-[295px] lg:h-[298px] lg:mt-12 md:w-[198px] md:h-[200.01px] md:mt-8"
                        />

                        <h5 className="flex lg:w-[194px] lg:h-[27px] font-satoshi font-bold lg:text-[20px] lg:leading-[27px] text-[#000000] md:w-[154px] md:h-[22px] md:text-[16px] md:leading-[21.6px]">
                            Vertical Striped Shirt
                        </h5>

                        <div className="flex lg:w-[113.7px] lg:h-[19px] lg:gap-[13px] md:w-[95.11px] md:h-[15.47] md:gap-[11px]">
                            <Image 
                                src="images/5stars.svg"
                                width={113}
                                height={18.49}
                                alt="5 Stars"
                            />

                            <p className="flex lg:w-[34px] lg:h-[19px] font-satoshi lg:text-[14px] lg:leading-[18.9px] text-[#000000] md:w-[30px] md:h-4 md:text-[12px] md:leading-[16.9px]">
                                5.0/5
                            </p>
                        </div>

                        <div className="flex lg:w-[55px] lg:h-8 lg:gap-[10px]">
                            <p className="flex lg:w-[55px] lg:h-8 font-satoshi font-bold lg:leading-[32.4px] lg:text-[24px] text-[#000000] md:w-[48px] md:h-[27px] md:text-[20px] md:leading-[27px]">
                                $212
                            </p>

                            <p className="flex lg:w-[56px] lg:h-8 font-satoshi font-bold lg:leading-[32.4px] lg:text-[24px] text-[#00000066] md:w-[48px] md:h-[27px] md:text-[20px] md:leading-[27px] line-through">
                                $232
                            </p>

                            <div className="flex lg:w-[58px] lg:h-7 rounded-r-[62px] rounded-l-[62px] px-[14px] py-[6px] gap-3 bg-[#FF33331A] md:w-[42px] md:h-5">
                                <p className="flex lg:w-8 lg:h-4 font-satoshi font-medium lg:text-[12px] lg:leading-[16.2px] text-[#FF3333] md:w-[26px] md:h-[14px] md:text-[10px] md:leading-[13.5px]">
                                    -20%
                                </p>
                            </div>
                        </div>

                    </div>

                    {/*====== 2 Product =====*/}
                    <div className="flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage6.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="lg:w-[295px] lg:h-[298px] lg:mt-12 md:w-[198px] md:h-[200.01px] md:mt-8"
                        />

                        <h5 className="flex lg:w-[226px] lg:h-[27px] font-satoshi font-bold lg:text-[20px] lg:leading-[27px] text-[#000000] md:w-[186px] md:h-[22px] md:text-[16px] md:leading-[21.6px]">
                            Courage Graphic T-shirt
                        </h5>

                        <div className="flex lg:w-[137.9px] lg:h-[19px] lg:gap-[13px] md:w-[116.2px] md:h-4 md:gap-[13px]">
                            <Image 
                                src="images/4stars.svg"
                                width={89.9}
                                height={18.49}
                                alt="4 Stars"
                            />

                            <p className="flex lg:w-[35px] lg:h-[19px] font-satoshi lg:text-[14px] lg:leading-[18.9px] text-[#000000] md:w-[30px] md:h-4 md:text-[12px] md:leading-[16.9px]">
                                4.0/5
                            </p>
                        </div>

                        <div className="flex lg:w-[200px] lg:h-8 lg:gap-[10px] ">
                            <p className="flex w-[54px] lg:h-8 lg:text-[24px] font-satoshi font-bold lg:leading-[32.4px] text-[#000000] md:h-[27px] md:text-[20px] md:leading-[27px]">
                                $145
                            </p>
                        </div>
                    </div>

                    {/*====== 3 Product =====*/}
                    <div className="hidden lg:flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage7.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="w-[295px] h-[298px] mt-12"
                        />

                        <h5 className="flex w-[239px] h-[27px] font-satoshi font-bold text-[20px] leading-[27px] text-[#000000]">
                            Loose Fit Bermuda Shorts
                        </h5>

                        <div className="flex w-[137.9px] h-[19px] gap-[13px] ">
                            <Image 
                                src="images/3stars.svg"
                                width={89.9}
                                height={18.49}
                                alt="3 Stars"
                            />

                            <p className="flex w-[35px] h-[19px] font-satoshi text-[14px] leading-[18.9px] text-[#000000]">
                                3.0/5
                            </p>
                        </div>

                        <div className="flex w-[200px] h-8 gap-[10px] ">
                            <p className="flex w-[54px] h-8 font-satoshi font-bold leading-[32.4px] text-[#000000] text-[24px]">
                                $80 
                            </p>
                        </div>
                    </div>

                     {/*====== 4 Product =====*/}
                    <div className="hidden lg:flex flex-col lg:w-[295px] h-auto gap-2">
                        <Image 
                            src="images/arrivalimage8.svg"
                            width={295}
                            height={298}
                            alt="Arrival Image"
                            className="w-[295px] h-[298px] mt-12"
                        />

                        <h5 className="flex w-[239px] h-[27px] font-satoshi font-bold text-[20px] leading-[27px] text-[#000000]">
                            Faded Skinny Jeans
                        </h5>

                        <div className="flex w-[137.9px] h-[19px] gap-[13px] ">
                            <Image 
                                src="images/4.5stars.svg"
                                width={89.9}
                                height={18.49}
                                alt="4.5 Stars"
                            />

                            <p className="flex w-[35px] h-[19px] font-satoshi text-[14px] leading-[18.9px] text-[#000000]">
                                4.5/5
                            </p>
                        </div>

                        <div className="flex w-[200px] h-8 gap-[10px] ">
                            <p className="flex w-[54px] h-8 font-satoshi font-bold leading-[32.4px] text-[#000000] text-[24px]">
                                $210
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex lg:w-[218px] lg:h-[52px] border-[1px] border-[#0000001A] rounded-r-[62px] rounded-l-[62px] px-[54px] py-4 gap-3 m-12 md:w-[358px] md:h-[46px] items-center justify-center">
                    <p className="flex lg:w-[52px] lg:h-[22px] font-satoshi font-medium lg:text-[16px] lg:leading-[21.6px] text-[#000000] md:w-[51px] md:h-[19px] md:text-[14px] md:leading-[18.9px] whitespace-nowrap">
                        View All
                    </p>
                </div>
            </div>

            {/*======= DRESS STYLE SECTION  =======*/}
            <div className="flex flex-col justify-center items-center mt-20 lg:mt-28">
                <div className="flex flex-col items-center lg:w-[1239px] lg:h-[866px] rounded-r-[40px] rounded-l-[40px] bg-[#F0F0F0] md:w-[358px] md:h-[975px]">
                    <h2 className="flex lg:w-[687px] lg:h-[58px] lg:mt-16 font-integral font-bold lg:text-[48px] lg:leading-[57.6px] text-center text-[#000000] md:w-[246px] md:h-[72px] md:text-[32px] md:leading-[36px] mt-6">
                        BROWSE BY DRESS STYLE
                    </h2>

                    {/*====== Images Section ======*/}

                    <div className="flex flex-col lg:flex-row mt-8 lg:mt-16 gap-4">
                        {/*======= 1 Image =======*/}
                        <Image 
                            src="images/casualimage.svg"
                            width={407}
                            height={289}
                            alt="Casual Image" 
                            className="hidden lg:flex"
                        />

                        <Image 
                            src="images/casualimage-md.svg"
                            width={310}
                            height={190}
                            alt="Casual Image"
                            className="lg:hidden flex"
                        />

                        {/*===== 2 Image =====*/}
                        <Image 
                            src="images/formalimage.svg"
                             width={684}
                             height={289}
                             alt="Formal Image"
                             className="hidden lg:flex"
                        />

                        <Image 
                            src="images/formalimage-md.svg"
                            width={310}
                            height={190}
                            alt="Formal Image"
                            className="lg:hidden flex"
                        />
                    </div>
                    
                    <div className="flex flex-col lg:flex-row mt-4 lg:mt-4 gap-4">
                        {/*====== 3 Image ======*/}
                        <Image
                            src="images/partyimage.svg"
                            width={684}
                            height={289}
                            alt="Party Image"
                            className="hidden lg:flex"
                        />

                        <Image 
                            src="images/partyimage-md (1).svg"
                            width={310}
                            height={190}
                            alt="Party Image"
                            className="lg:hidden flex"
                        />

                        {/*====== 4 Image ======*/}
                        <Image 
                            src="images/gymimage.svg"
                            width={407}
                            height={289}
                            alt="Gym Image" 
                            className="hidden lg:flex"
                        />

                        <Image 
                            src="images/gymimage-md.svg"
                            width={310}
                            height={190}
                            alt="Gym Image"
                            className="lg:hidden flex"
                        />
                    </div>
                </div>
            </div>

            {/*===== Reviews Section ======*/}
            <div className="flex flex-col">
                <div className="flex flex-row items-center mb-10">
                    <h2 className="flex lg:w-[654px] lg:h-[58px] font-integral font-bold lg:text-[48px] lg:leading-[57.6px] text-[#000000] md:w-[288px] md:h-[72px] md:text-[32px] md:leading-[38px] lg:mt-20 lg:ml-24 mt-6 ml-7">
                        OUR HAPPY CUSTOMERS
                    </h2>

                    <div className="flex gap-4 -mb-24 mr-6 lg:mr-0 lg:ml-[500px]">
                        <Image 
                            src="images/arrow-down-bold 2.svg"
                            width={24}
                            height={24}
                            alt="Arrow"
                        />

                        <Image 
                            src="images/arrow-down-bold 1.svg"
                            width={24}
                            height={24}
                            alt="Arrow"
                        />
                    </div>
                </div>
                <div className="flex flex-row mb-16">

                    {/*===== Box No.01 =====*/}
                    <div 
                    style={{
                        backdropFilter: "blur(50px)",
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        borderRadius: "20px"
                    }}
                    className="hidden lg:flex lg:w-[400px] lg:h-[240px] rounded-r-[20px] rounded-l-[20px] border-[1px] border-[#0000001A] lg:px-8 lg:py-7 lg:gap-[342px] -ml-80">
                        <div className="flex w-[336px] h-[161.58px] justify-between">
                            <div className="flex flex-col w-[336px] h-[161.58px] gap-[15px]">
                                <Image 
                                    src="images/5stars.svg"
                                    width={138.84}
                                    height={22.58}
                                    alt=" stars"    
                                />

                                <div className="flex flex-col w-[336px] h-[124px] gap-3">
                                    <div className="flex flex-row w-[110px] h-6 gap-2">
                                        <h4 className="flex w-[82px] h-[15px] font-satoshi font-bold text-[20px] leading-[22px] text-[#000000]">
                                            Sarah M.
                                        </h4>
                                        
                                        <div className="flex w-[24px] h-[24px]">                                        
                                            <Image 
                                                src="images/verified.svg"
                                                width={19.5}
                                                height={19.5}
                                                alt="Verified"
                                                className="flex mb-1"
                                            />
                                        </div>
                                    </div>

                                    <p className="flex w-[336px] h-[88px] font-satoshi text-[16px] leading-[22px] text-[#00000099]">
                                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Box No.02 =====*/}
                    <div className="flex lg:w-[400px] lg:h-[240px] rounded-r-[20px] rounded-l-[20px] border-[1px] border-[#0000001A] lg:px-8 lg:py-7 gap-[342px] lg:ml-4 md:w-[358px] md:h-[186.19px] md:p-6 ml-6">
                        <div className="flex lg:w-[336px] lg:h-[161.58px] justify-between md:w-[310px] md:h-[138.19px] md:gap-[22px]">
                            <div className="flex flex-col lg:w-[336px] lg:h-[161.58px] lg:gap-[15px] md:w-[310px] md:h-[138.19px] md:gap-3">
                                <Image 
                                    src="images/5stars.svg"
                                    width={138.84}
                                    height={22.58}
                                    alt="5 stars"
                                    className="flex lg:w-[138.84px] lg:h-[22.58px] lg:gap-[6.49px] md:w-[118px] md:h-[19.19px] md:gap-[5.51px]" 
                                />

                                <div className="flex flex-col lg:w-[336px] lg:h-[124px] lg:gap-3 md:w-[310px] md:h-[107px] md:gap-2">
                                    <div className="flex flex-row lg:w-[110px] lg:h-6 gap-2 md:w-[89px] md:h-[19px]">
                                        <h4 className="flex lg:w-[82px] lg:h-[15px] font-satoshi font-bold lg:text-[20px] lg:leading-[22px] text-[#000000] md:w-[66px] md:h-3 md:text-[16px] md:leading-[22px] whitespace-nowrap">
                                            Sarah M.
                                        </h4>
                                        
                                        <div className="flex w-[24px] h-[24px]">                                        
                                            <Image 
                                                src="images/verified.svg"
                                                width={19.5}
                                                height={19.5}
                                                alt="Verified"
                                                className="flex mb-1"
                                            />
                                        </div>
                                    </div>

                                    <p className="flex lg:w-[336px] lg:h-[88px] font-satoshi lg:text-[16px] lg:leading-[22px] text-[#00000099] md:w-[310px] md:h-[80px] md:text-[14px] md:leading-5">
                                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Box No.03 =====*/}
                    <div className="hidden lg:flex w-[400px] h-[240px] rounded-r-[20px] rounded-l-[20px] border-[1px] border-[#0000001A] px-8 py-7 gap-[342px] ml-6">
                        <div className="flex w-[336px] h-[161.58px] justify-between">
                            <div className="flex flex-col w-[336px] h-[161.58px] gap-[15px]">
                                <Image 
                                    src="images/5stars.svg"
                                    width={138.84}
                                    height={22.58}
                                    alt=" stars"    
                                />

                                <div className="flex flex-col w-[336px] h-[124px] gap-3">
                                    <div className="flex flex-row w-[110px] h-6 gap-2">
                                        <h4 className="flex w-[65px] h-[15px] font-satoshi font-bold text-[20px] leading-[22px] text-[#000000]">
                                            Alex K.
                                        </h4>
                                        
                                        <div className="flex w-[24px] h-[24px]">                                        
                                            <Image 
                                                src="images/verified.svg"
                                                width={19.5}
                                                height={19.5}
                                                alt="Verified"
                                                className="flex mb-1"
                                            />
                                        </div>
                                    </div>

                                    <p className="flex w-[336px] h-[115px] font-satoshi text-[16px] leading-[22px] text-[#00000099]">
                                        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*====== Box No.04 ======*/}
                    <div className="hidden lg:flex w-[400px] h-[240px] rounded-r-[20px] rounded-l-[20px] border-[1px] border-[#0000001A] px-8 py-7 gap-[342px] ml-6">
                        <div className="flex w-[336px] h-[161.58px] justify-between">
                            <div className="flex flex-col w-[336px] h-[161.58px] gap-[15px]">
                                <Image 
                                    src="images/5stars.svg"
                                    width={138.84}
                                    height={22.58}
                                    alt=" stars"    
                                />

                                <div className="flex flex-col w-[336px] h-[124px] gap-3">
                                    <div className="flex flex-row w-[110px] h-6 gap-2">
                                        <h4 className="flex w-[83px] h-[15px] font-satoshi font-bold text-[20px] leading-[22px] text-[#000000]">
                                            James L.
                                        </h4>
                                        
                                        <div className="flex w-[24px] h-[24px]">                                        
                                            <Image 
                                                src="images/verified.svg"
                                                width={19.5}
                                                height={19.5}
                                                alt="Verified"
                                                className="flex mb-1"
                                            />
                                        </div>
                                    </div>

                                    <p className="flex w-[336px] h-[115px] font-satoshi text-[16px] leading-[22px] text-[#00000099]">
                                        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Box No.05 =====*/}
                    <div 
                    style={{
                        backdropFilter: "blur(50px)",
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        borderRadius: "20px"
                    }}
                    className="hidden lg:flex lg:w-[400px] lg:h-[240px] rounded-r-[20px] rounded-l-[20px] border-[1px] border-[#0000001A] lg:px-8 lg:py-7 lg:gap-[342px] ml-6">
                        <div className="flex w-[336px] h-[161.58px] justify-between">
                            <div className="flex flex-col w-[336px] h-[161.58px] gap-[15px]">
                                <Image 
                                    src="images/5stars.svg"
                                    width={138.84}
                                    height={22.58}
                                    alt=" stars"    
                                />

                                <div className="flex flex-col w-[336px] h-[124px] gap-3">
                                    <div className="flex flex-row w-[110px] h-6 gap-2">
                                        <h4 className="flex w-[65px] h-[15px] font-satoshi font-bold text-[20px] leading-[22px] text-[#000000]">
                                            Mooen
                                        </h4>
                                        
                                        <div className="flex w-[24px] h-[24px]">                                        
                                            <Image 
                                                src="images/verified.svg"
                                                width={19.5}
                                                height={19.5}
                                                alt="Verified"
                                                className="flex mb-1"
                                            />
                                        </div>
                                    </div>

                                    <p className="flex w-[336px] h-[88px] font-satoshi text-[16px] leading-[22px] text-[#00000099]">
                                        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <FooterSection />
        </footer>
    </div>
  );
};

export default HomePageSection;