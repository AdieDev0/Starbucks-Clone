import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";
const Last = () => {
  return (
    <div className="bg-white p-32 w-full ">
      <div className="flex justify-between ">
        <div className="grid gap-5">
          <p className="text-black/90 font-bold text-2xl">About Us</p>
          <div className="grid gap-3 text-black/70">
            <p className="cursor-pointer hover:text-black duration-100">
              Our Company
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              Stories and News
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              Customer Service
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              Careers
            </p>
          </div>
        </div>
        <div className="grid gap-5">
          <p className="text-black/90 font-bold text-2xl">Order Online</p>
          <div className="grid gap-3 text-black/70">
            <p className="cursor-pointer hover:text-black duration-100">
              Order on the App
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              Delivery
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              Send eGifts
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              Grab Partnership
            </p>
          </div>
        </div>
        <div className="grid gap-5">
          <p className="text-black/90 font-bold text-2xl">Rewards</p>
          <div className="grid gap-3 text-black/70">
            <p className="cursor-pointer hover:text-black duration-100">
              My Account
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              View Transactions
            </p>
            <p className="cursor-pointer hover:text-black duration-100">
              Reload
            </p>
            <p className="cursor-pointer hover:text-black duration-100">FAQs</p>
          </div>
        </div>
        <div className="text-black/90 font-bold text-2xl">Social Impact</div>
        <div className="text-black/90 font-bold text-2xl">Promotions</div>
        <div className="rotate-90 text-2xl font-bold text-black">STARBUCKS</div>
      </div>
      <hr className="my-10 border-black/30" />
      {/* Bot */}
      <div className="text-black">
        <div className="flex gap-3 items-center">
          <FaSquareFacebook className="size-7 cursor-pointer"/>
          <FaInstagram className="size-7 cursor-pointer"/>
          <DiGithubBadge className="size-9 cursor-pointer"/>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-7">
            <p className="hover:text-green-700 duration-150 cursor-pointer">Web Accessibility</p>
            <p className="hover:text-green-700 duration-150 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-green-700 duration-150 cursor-pointer">Terms of Use</p>
            <p className="hover:text-green-700 duration-150 cursor-pointer">Site Map</p>
            <p className="hover:text-green-700 duration-150 cursor-pointer">Cookie Preferences</p>
          </div>
          <div>
            <p className="uppercase">clone by adie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
