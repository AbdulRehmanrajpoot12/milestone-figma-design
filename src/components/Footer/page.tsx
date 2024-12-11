import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="relative flex flex-col lg:w-[1441px] lg:h-[589px] lg:left-[-1px]">
      {/*====== BOX CONTENT =====*/}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:w-[1240px] lg:h-[180px] lg:left-[100px] rounded-r-[20px] rounded-l-[20px] justify-between lg:px-16 lg:py-9 bg-[#000000] md:w-[358px] md:h-[293px] md:left-4 gap-4">
            <h2 className="flex lg:w-[551px] lg:h-[94px] lg:mt-0 font-integral font-bold text-[40px] leading-[45px] text-[#FFFFFF] md:w-[297px] md:h-[105px] md:top-[233px] md:left-6 md:text-[32px] md:leading-[35px] md:mt-8">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>

            <div className="flex flex-col lg:w-[349px] lg:h-[108px] lg:gap-[14px] lg:mb-0 md:mb-8 md:gap-3">
                <div className="flex lg:w-[349px] lg:h-12 rounded-r-[62px] rounded-l-[62px] px-4 py-3 gap-3 bg-[#FFFFFF] md:w-[311px] md:h-[42px] md:top-[169px] md:left-6">
                  <Image 
                  src="images/emailbox.svg"
                  width={24}
                  height={24}
                  alt="News Letter icon"
                  />

                  <p className="flex lg:w-[173px] lg:h-[22px] font-satoshi lg:text-[16px] lg:leading-[21.6px] text-[#00000066] md:w-[151px] md:h-[19px] md:text-[14px] md:leading-[18.9px]">
                    Enter your email address
                  </p>
                </div>

                <div className="flex justify-center lg:w-[349px] lg:h-[46px] rounded-r-[62px] rounded-l-[62px] px-4 py-3 gap-3 bg-[#FFFFFF] md:w-[311px] md:h-[42px] md:top-[223px] md:left-6">
                  <p className="flex lg:w-[172px] lg:h-[22px] font-satoshi font-medium lg:text-[16px] lg:leading-[21.6px] text-[#000000] md:w-[150px] md:h-[19px] md:text-[14px] md:leading-[18.9px]">
                    Subscribe to Newsletter
                  </p>
                </div>
            </div>
        </div>

        {/*====== FOOTER CONTENT =====*/}
        <div className="absolute z-0 lg:w-[1441px] lg:h-[499px] lg:mt-24 left-[-1px] bg-[#F0F0F0] md:w-[392px] md:h-[846px] md:mt-32">
          <div className="flex relative lg:w-full lg:mt-0 lg:ml-0 lg:h-[90%] lg:justify-center lg:items-center md:mt-48 md:ml-7">
            <div className="flex flex-col lg:flex-row justify-center lg:w-[1240px] lg:h-[177px] lg:left-[100px] lg:justify-between">
              {/*===== 1 CONTAINER ======*/}
              <div className="flex flex-col lg:w-[248px] lg:h-[177px] lg:gap-[35px]">
                <div className="flex flex-col lg:w-[248px] lg:h-[114px] lg:gap-[25px] md:gap-6">
                  <h4 className="flex lg:w-[167px] lg:h-[23px] font-integral font-bold lg:mb-1 lg:text-[33.45px] lg:leading-[40.15px] text-[#000000] md:w-[144px] md:h-5 md:left-4 md:text-[28.85px] md:leading-[34.67px]">
                    SHOP.CO
                  </h4>

                  <p className="flex lg:w-[248px] lg:h-[66px] font-satoshi text-[14px] lg:leading-[22px] text-[#00000099] md:w-[357px] md:h-10 md:left-[17px] md:leading-5">
                    We have clothes that suits your style and which you're proud to wear. From women to men.
                  </p>
                </div>

                <div className="flex lg:w-[148px] lg:h-7 lg:mt-0 space-x-3 md:mt-6">
                    <Image 
                      src="images/logo-twitter.svg"
                      width={28}
                      height={28}
                      alt="Twitter Icon"
                      className="flex lg:top-[149px] md:left-4"
                    />

                    <Image 
                      src="images/logo-facebook.svg"
                      width={28}
                      height={28}
                      alt="Facebook Icon"
                      className="flex lg:top-[149px] lg:left-10 md:left-14"
                    />

                    <Image 
                      src="images/logo-instagram.svg"
                      width={28}
                      height={28}
                      alt="Instagram Icon"
                      className="flex lg:top-[149px] lg:left-20 md:left-24"
                    />

                    <Image 
                      src="images/logo-github.svg"
                      width={28}
                      height={28}
                      alt="Github Icon"
                      className="flex lg:top-[149px] lg:left-[120px] md:left-[136px]"
                    />
                </div>
              </div>

              <div className="grid grid-cols-2 md:gap-6 md:mt-3 lg:flex lg:gap-28 lg:justify-between">
               {/*===== 2 CONTAINER ======*/}
              <div className="flex flex-col lg:w-[104px] lg:h-[177px] lg:gap-[26px] md:w-[91px] md:h-[146px] md:left-4 md:gap-4">
                <h5 className="flex lg:w-[98px] lg:h-[18px] font-satoshi font-medium lg:text-[16px] leading-[18px] tracking-[3px] text-[#000000] md:w-[88px] md:h-[18px] md:text-[14px]">
                  COMPANY
                </h5>

                <p className="flex lg:w-[104px] lg:h-[133px] font-satoshi lg:text-[16px] lg:leading-[19px] text-[#00000099] md:w-[91px] md:h-[112px] md:text-[14px] md:leading-4 justify-between">
                  About
                  <br />
                  <br />
                  Features
                  <br />
                  <br /> 
                  Works
                  <br />
                  <br />
                  Career  
                </p>
              </div>

              {/*===== 3 CONTAINER ======*/}
              <div className="flex flex-col lg:w-[136px] lg:h-[177px] lg:gap-[26px] md:w-[121px] md:h-[146px] md:left-[196px] md:gap-4">
                <h5 className="flex lg:w-[49px] lg:h-[18px] font-satoshi font-medium lg:text-[16px] leading-[18px] tracking-[3px] text-[#000000] md:w-[44px] md:h-[18px] md:text-[14px]">
                  HELP
                </h5>

                <p className="flex lg:w-[136px] lg:h-[133px] font-satoshi lg:text-[16px] lg:leading-[19px] text-[#00000099] md:w-[121px] md:h-[112px] md:text-[14px] md:leading-4 justify-between">
                  Customer Support
                  <br />
                  <br />
                  Delivery Details
                  <br />
                  <br />
                  Terms & Conditions
                  <br />
                  <br />
                  Privacy Policy 
                </p>
              </div>

              {/*===== 4 CONTAINER ======*/}
              <div className="flex flex-col lg:w-[149px] lg:h-[177px] lg:gap-[26px] md:w-[121px] md:h-[146px] md:left-[196px] md:gap-4">
                <h5 className="flex lg:w-[37px] lg:h-[18px] font-satoshi font-medium lg:text-[16px] leading-[18px] tracking-[3px] text-[#000000] md:w-[33px] md:h-[18px] md:text-[14px]">
                  FAQ
                </h5>

                <p className="flex lg:w-[149px] lg:h-[133px] font-satoshi lg:text-[16px] lg:leading-[19px] text-[#00000099] md:w-[121px] md:h-[112px] md:text-[14px] md:leading-4 justify-between">
                  Account
                  <br />
                  <br />
                  Manage Deliveries
                  <br />
                  <br />
                  Orders
                  <br />
                  <br />
                  Payments
                </p>
              </div>

              {/*===== 5 CONTAINER ======*/}
              <div className="flex flex-col lg:w-[149px] lg:h-[177px] lg:gap-[26px] md:w-[121px] md:h-[146px] md:left-[196px] md:gap-4">
                <h5 className="flex lg:w-[118px] lg:h-[18px] font-satoshi font-medium lg:text-[16px] leading-[18px] tracking-[3px] text-[#000000] md:w-[107px] md:h-[18px] md:text-[14px]">
                  RESOURCES
                </h5>

                <p className="flex lg:w-[149px] lg:h-[133px] font-satoshi lg:text-[16px] lg:leading-[19px] text-[#00000099] md:w-[159px] md:h-[112px] md:text-[14px] md:leading-4 justify-between">
                  Free eBooks
                  <br />
                  <br />
                  Development Tutorial
                  <br />
                  <br />  
                  How to - Blog
                  <br />
                  <br />
                  Youtube Playlist
                </p>
              </div>
              </div>
            </div>

            <div className="absolute lg:w-[1240px] lg:left-[100px] lg:mt-80 lg:-ml-0 border-[1px] border-[#0000001A] md:w-[358px] md:left-4 md:mt-[500px] md:-ml-6"></div>

            <p className="absolute w-[269px] h-[19px] lg:left-[100px] lg:top-[404px] font-satoshi text-[14px] leading-[18.9px] lg:justify-end text-[#00000099] md:justify-center md:left-5 md:top-[528px]">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="absolute md:flex flex-row lg:w-[281.07px] lg:h-[30.03px] lg:top-[404px] lg:left-[1059px] lg:gap-3 md:w-[240.93px] md:h-[25.74px] md:top-[556px] md:left-7 md:gap-[10.29px]">
              <Image 
                src="images/visa.svg"
                width={46.61}
                height={30.03}
                alt="Visa Icon"
                className="flex lg:w-[46.61px] lg:h-[30.03px] md:w-[39.96px] md:h-[25.74px]"
              />

              <Image 
                src="images/debitcard.svg"
                width={46.61}
                height={30.03}
                alt="Debit Card Icon"
                className="flex md:w-[39.96px] md:h-[25.74px]"
              />

              <Image 
                src="images/paypal.svg"
                width={46.61}
                height={30.03}
                alt="Paypal Icon"
                className="flex lg:w-[46.61px] lg:h-[30.03px] md:w-[39.96px] md:h-[25.74px]"
              />

              <Image 
                src="images/applepay.svg"
                width={46.61}
                height={30.03}
                alt="Apple Pay Icon"
                className="flex lg:w-[46.61px] lg:h-[30.03px] md:w-[39.96px] md:h-[25.74px]"
              />

              <Image 
                src="images/googlepay.svg"
                width={46.61}
                height={30.03}
                alt="Google Pay Icon"
                className="flex lg:w-[46.61px] lg:h-[30.03px] md:w-[39.96px] md:h-[25.74px]"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default FooterSection;