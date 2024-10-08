import React from "react";
import party from "../assets/Party.jpeg";

const Head = () => {
  return (
    <div>
      <div className="lg:h-[600px] h-[140px] w-full bg-white">
        <img src={party} alt="" className="w-screen absolute" />
        <div className="relative left-4 top-9 sm:left-8 sm:top-32 md:left-16 md:top-36 lg:left-64 lg:top-52 w-[90%] sm:w-[500px] md:w-[550px]">
          <p className="text-green-900 font-bold text-2xl sm:text-3xl md:text-6xl lg:text-7xl mb-6 sm:mb-10 md:mb-16 lg:mb-20">
            Make It A Party
          </p>
          <button className="border border-black text-black text-xs md:text-md lg:text-xl hover:border-green-600 hover:bg-green-900 hover:text-green-300 duration-200 font-semibold rounded-3xl px-4 py-1">
            Discover the flavors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
