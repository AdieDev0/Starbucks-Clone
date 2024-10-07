import React from "react";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";

const Last = () => {
  return (
    <div className="bg-white p-16 lg:p-32 w-full">
      <nav className="flex flex-wrap justify-between">
        {/* About Us Section */}
        <div className="grid gap-5">
          <p className="text-black/90 font-bold text-xl lg:text-2xl">
            About Us
          </p>
          <div className="grid gap-3 text-black/70">
            {[
              "Our Company",
              "Stories and News",
              "Customer Service",
              "Careers",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-black transition duration-100"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Order Online Section */}
        <div className="grid gap-5">
          <p className="text-black/90 font-bold text-xl lg:text-2xl">
            Order Online
          </p>
          <div className="grid gap-3 text-black/70">
            {[
              "Order on the App",
              "Delivery",
              "Send eGifts",
              "Grab Partnership",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-black transition duration-100"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Rewards Section */}
        <div className="grid gap-5">
          <p className="text-black/90 font-bold text-xl lg:text-2xl">Rewards</p>
          <div className="grid gap-3 text-black/70">
            {["My Account", "View Transactions", "Reload", "FAQs"].map(
              (item) => (
                <p
                  key={item}
                  className="cursor-pointer hover:text-black transition duration-100"
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        {/* Other Sections */}
        <div className="text-black/90 font-bold text-xl lg:text-2xl">
          Social Impact
        </div>
        <div className="text-black/90 font-bold text-xl lg:text-2xl">
          Promotions
        </div>

        {/* Branding */}
        <div className="rotate-90 text-xl lg:text-2xl font-bold text-black">
          STARBUCKS
        </div>
      </nav>

      <hr className="my-10 border-black/30" />

      {/* Bottom Section */}
      <footer className="text-black">
        {/* Social Icons */}
        <div className="flex gap-5 items-center">
          <FaSquareFacebook
            className="text-2xl cursor-pointer hover:animate-bounce hover:text-blue-500 duration-300 size-7"
            aria-label="Facebook"
          />
          <FaInstagram
            className="text-2xl cursor-pointer hover:animate-bounce hover:text-orange-500 duration-300 size-7"
            aria-label="Instagram"
          />
          <DiGithubBadge
            className="text-3xl cursor-pointer hover:animate-bounce duration-300 size-9"
            aria-label="Github"
          />
        </div>

        {/* Footer Links */}
        <div className="flex justify-between mt-10">
          <div className="flex flex-wrap gap-5">
            {[
              "Web Accessibility",
              "Privacy Policy",
              "Terms of Use",
              "Site Map",
              "Cookie Preferences",
            ].map((item) => (
              <p
                key={item}
                className="hover:text-green-700 transition duration-150 cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
          <div>
            <p className="uppercase font-bold">clone by adie</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Last;
