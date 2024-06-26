import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const ToggleChange = () => {
    isopen === false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <nav className="z-50 px-2 fixed w-full bg-white border-b">
      <div className="py-7  container flex justify-between items-center">
        <div className="lg:w-[185px]   w-[130px]">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="md:block hidden ">
          <ul className="flex items-center gap-[75px] text-lg font-primary text-black font-medium">
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>Shop</li>
            </Link>
            <Link>
              <li>About</li>
            </Link>
            <Link>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        {isopen ? (
          <div className=" ">
            <ul className="flex flex-col gap-10 absolute top-[86px] right-0 pb-80 w-56 h-screen bg-brand  z-10 items-center text-xl justify-center font-primary font-semibold">
              <Link>
                <li onClick={ToggleChange}>Home</li>
              </Link>
              <Link>
                <li onClick={ToggleChange}>Shop</li>
              </Link>
              <Link>
                <li onClick={ToggleChange}>About</li>
              </Link>
              <Link>
                <li onClick={ToggleChange}>Contact</li>
              </Link>
            </ul>
            <button className="absolute top-[80px] z-10 right-5 py-8 mr-3 cursor-pointer">
              <IoMdClose
                onClick={ToggleChange}
                size={30}
                className="bg-white rounded-full p-1"
              />
            </button>
          </div>
        ) : (
          ""
        )}
        <ul className="flex  items-center gap-5   lg:gap-10 text-xl lg:text-2xl">
          <Link>
            <li>
              <FaRegUser />
            </li>
          </Link>

          <Link>
            <li>
              <CiSearch />
            </li>
          </Link>
          <Link>
            <li>
              <FaRegHeart />
            </li>
          </Link>
          <Link>
            <li>
              <FaCartShopping />
            </li>
          </Link>
        </ul>
        <button onClick={ToggleChange} className="md:hidden pl-">
          <CgMenuRight className=" animate-pulse duration-100" size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
