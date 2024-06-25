import React from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="py-7 container flex justify-between items-center">
        <img src="/public/logo.png" alt="logo" />
        <ul className="flex items-center gap-[75px] text-lg font-primary  font-medium">
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
        <div>
          <ul className="flex  items-center  gap-10 text-2xl">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
