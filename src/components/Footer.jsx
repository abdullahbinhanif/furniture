import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <footer className="pt-12 pb-9 border-t">
    //   <div className="container">
    //     <div className="container flex lg:justify-between flex-wrap lg:gap-0 gap-4 justify-center">
    //       <div>
    //         <img src="/logo.png" alt="" />
    //         <p className="text-base font-normal font-primary text-[#9F9F9F] w-[285px] pt-14">
    //           400 University Drive Suite 200 Coral Gables, FL 33134 USA
    //         </p>
    //       </div>
    //       <ul>
    //         <li>
    //           <p className="text-base font-normal font-primary text-[#9F9F9F] pb-14">
    //             Links
    //           </p>
    //         </li>
    //         <li>
    //           <Link
    //             to="/"
    //             className="font-primary text-base font-medium pb-12 inline-block"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/shop"
    //             className="font-primary text-base font-medium pb-12 inline-block"
    //           >
    //             Shop
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/"
    //             className=" font-primary text-base font-medium pb-12 inline-block"
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/"
    //             className="font-primary text-base font-medium pb-12 inline-block"
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <p className="text-base font-normal font-primary text-[#9F9F9F] pb-14">
    //             Help
    //           </p>
    //         </li>
    //         <li>
    //           <Link
    //             to="/"
    //             className="font-primary text-base font-medium pb-12 inline-block"
    //           >
    //             Payment Options
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/"
    //             className=" font-primary text-base font-medium pb-12 inline-block"
    //           >
    //             Returns
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/" className="font-primary text-base font-medium">
    //             Privacy Policies
    //           </Link>
    //         </li>
    //         <div>
    //           <p className="text-base font-normal font-primary text-[#9F9F9F] pb-14">
    //             Newsletter
    //           </p>
    //           <input
    //             type="text"
    //             placeholder="Enter Your Email Address"
    //             className="border-b border-b-black outline-none placeholder:text-9F9F9F placeholder:text-[14px] placeholder:font-medium placeholder:font-primary"
    //           />
    //           <button className="border-b font-primary text-[14px] font-medium border-black ml-2">
    //             SUBSCRIBE
    //           </button>
    //         </div>
    //       </ul>
    //     </div>
    //     <p className="font-primary text-base text-center lg:text-left font-normal border-t pt-9">
    //       2023 furino. All rights reverved
    //     </p>
    //   </div>
    // </footer>
    <footer class=" border-t">
      <div className="container">
        <div class="container py-10 mx-auto">
          <div class="flex flex-wrap text-center  lg:justify-between">
            <div class="lg:w-1/4  w-full px-4 ">
              <div>
                <img src="/logo.png" alt="" />
                <p className="text-base font-normal font-primary text-[#9F9F9F] w-[285px] pt-14 lg:text-left m-auto ">
                  400 University Drive Suite 200 Coral Gables, FL 33134 USA
                </p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-10">
              <ul class="list-none">
                <li>
                  <p className="text-base font-normal font-primary text-[#9F9F9F] lg:pb-14 pb-5 mt-10 lg:mt-0">
                    Links
                  </p>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-primary text-base font-medium lg:pb-12 pb-6 inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="font-primary text-base font-medium lg:pb-12 pb-6 inline-block"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className=" font-primary text-base font-medium lg:pb-12 pb-6 inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-primary text-base font-medium lg:pb-12 pb-6 inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <ul class="list-none   mb-10">
                <li>
                  <p className="text-base font-normal font-primary text-[#9F9F9F] lg:pb-14 pb-5 mt-10 lg:mt-0">
                    Help
                  </p>
                </li>
                <li>
                  <Link
                    to="/"
                    className="font-primary text-base font-medium lg:pb-12 pb-6 inline-block"
                  >
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="font-primary text-base font-medium lg:pb-12 pb-6 inline-block"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className=" font-primary text-base font-medium lg:pb-12 pb-6 inline-block"
                  >
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>

            <div class="lg:w-1/4  w-full px-4">
              <p className="text-base font-normal font-primary text-[#9F9F9F] lg:pb-14 pb-5">
                Newsletter
              </p>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border-b border-b-black outline-none placeholder:text-9F9F9F placeholder:text-[14px] placeholder:font-medium placeholder:font-primary"
              />
              <button className="border-b font-primary text-[14px] font-medium border-black ml-2">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <p className="font-primary text-base text-center lg:text-left font-normal pb-[38px] border-t pt-9">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
