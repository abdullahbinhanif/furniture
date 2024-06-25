import React from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="py-7 container flex justify-between items-center">
        <img src="/public/logo.png" alt="logo" />
        <ul className="flex items-center gap-[75px] text-lg font-primary  font-medium">
          <li className="text-[#B88E2F]">Home</li>
          <li className=" hover:text-[#B88E2F] transition-all ease-linear">
            Shop
          </li>
          <li className=" hover:text-[#B88E2F] transition-all ease-linear">
            About
          </li>
          <li className=" hover:text-[#B88E2F] transition-all ease-linear">
            Contact
          </li>
        </ul>
        <div>
          <ul className="flex  items-center  gap-10 text-2xl">
            <li>
              <FaRegUser />
            </li>
            <li>
              <CiSearch />
            </li>
            <li>
              <FaRegHeart />
            </li>
            <li>
              <FaCartShopping />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
