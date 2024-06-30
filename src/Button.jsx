import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, path }) => {
  return (
    <Link
      className=" text-white text-base font-bold font-primary py-3 px-5 lg:py-6 lg:px-[72px] bg-brand inline-block  "
      to={path}
    >
      {title}
    </Link>
  );
};

export default Button;
