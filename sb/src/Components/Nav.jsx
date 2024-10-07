import React, { useState } from "react";
import sb from "../assets/sb.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black sticky top-0 z-50 border-b">
      {/* Navbar */}
      <div className="flex items-center px-4 md:px-9 lg:px-32 py-6 justify-between overflow-hidden">
        <div className="uppercase flex items-center gap-8 font-bold">
          {/* logo */}
          <NavLink to="">
            <img src={sb} alt="/" className="lg:w-14 md:w-14 w-10" />
          </NavLink>
          <NavLink
            to="/menu"
            className="cursor-pointer text-sm hover:text-green-600 duration-200 hidden md:inline-block lg:inline-block"
          >
            Menu
          </NavLink>
          <NavLink
            to="/merchandise"
            className="cursor-pointer text-sm hover:text-green-600 duration-200 hidden md:inline-block lg:inline-block"
          >
            Merchandise
          </NavLink>
          <NavLink
            to="/rewards"
            className="cursor-pointer text-sm hover:text-green-600 duration-200 hidden md:inline-block lg:inline-block"
          >
            Rewards
          </NavLink>
        </div>
        <div className="flex gap-8 font-bold items-center">
          <p className="cursor-pointer text-sm hover:text-green-600 duration-200 hidden md:inline-block lg:inline-block">
            Find a Store
          </p>
          <div className="flex gap-3">
            <button className="border text-sm border-black py-2 px-3 rounded-3xl hover:bg-gray-200 duration-200 hidden md:inline-block lg:inline-block">
              Sign in
            </button>
            <button className="border text-sm bg-black text-white border-black py-2 px-3 rounded-3xl hover:bg-black/80 duration-200 hidden md:inline-block lg:inline-block">
              Join Now
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden lg:hidden sm:inline-block">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            ) : (
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full mt-[85px] w-full bg-white text-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col items-start p-6">
          <div className="grid gap-y-8">
            <NavLink
              to="/menu"
              className="cursor-pointer hover:text-green-600 duration-200 text-xl"
            >
              Menu
            </NavLink>
            <NavLink
              to="/merchandise"
              className="cursor-pointer hover:text-green-600 duration-200 text-xl"
            >
              Merchandise
            </NavLink>
            <NavLink
              to="/rewards"
              className="cursor-pointer hover:text-green-600 duration-200 text-xl"
            >
              Rewards
            </NavLink>
          </div>
          <hr className="w-full my-5 border-2" />
          <div className="flex flex-col gap-5">
            <p className="cursor-pointer text-lg text-gray-400 mb-4">
              Find a Store
            </p>
            <button className="border font-bold text-md border-black py-2 px-3 rounded-3xl hover:bg-gray-200 duration-200">
              Sign in
            </button>
            <button className="border font-bold text-md bg-black text-white border-black py-2 px-3 rounded-3xl hover:bg-black/80 duration-200">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
