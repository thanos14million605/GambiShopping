import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";

import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const { theme, onToggleTheme } = useTheme();

  useEffect(
    function () {
      if (theme === "light") document.documentElement.classList.remove("dark");
      else document.documentElement.classList.add("dark");
    },
    [theme]
  );

  return (
    <div className="px-3 md:px-8 py-5 w-full mb-4 bg-gray-100 dark:bg-slate-700 md:rounded-tr-2xl md:rounded-tl-2xl">
      <div className="flex flex-row items-center h-full justify-between w-full">
        <Link to="/">
          <h1 className="text-gray-500 dark:text-blue-600 font-bold text-2xl md:text-3xl uppercase">
            GambiShopping 🛒
          </h1>
        </Link>
        <div className="flex space-x-8 items-center">
          <Link to="/create">
            <div className="flex items-center cursor-pointer p-2 dark:bg-gray-400 bg-gray-700 rounded-lg">
              <CiSquarePlus className="text-2xl text-white" />
            </div>
          </Link>
          {theme === "dark" ? (
            <div className="flex items-center cursor-pointer p-2 dark:bg-gray-400 bg-gray-700 rounded-lg">
              <IoMdSunny
                className="text-2xl text-yellow-400"
                onClick={onToggleTheme}
              />
            </div>
          ) : (
            <div className="flex items-center cursor-pointer p-2 dark:bg-gray-400 bg-gray-700 rounded-lg">
              <FaMoon
                className="text-2xl text-gray-400"
                onClick={onToggleTheme}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
