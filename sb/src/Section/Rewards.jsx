import React from "react";
import pumpkin from "../assets/pumpkin.jpg";
import card from "../assets/card.svg";
import cart from "../assets/cart.svg";
import ecard from "../assets/ecard.svg";
import star25 from "../assets/star25.svg";
import star40 from "../assets/star40.svg";
import star50 from "../assets/star50.svg";
import single from "../assets/single.svg";
import cup from "../assets/cup.svg";
import phonecup from "../assets/phonecup.svg";
import grab from "../assets/grab.svg";
import lazada from "../assets/lazada.svg";
import { NavLink } from "react-router-dom";
import appsb from "../assets/AppSB.jpg";
import appstore from "../assets/appstore.svg";
import playstore from "../assets/playstore.svg";
import Last from "../Components/Last";
const Rewards = () => {
  return (
    <>
      {/* Sticky Header */}
      <div className="bg-[#1E3932] w-full h-12 px-4 md:px-20 lg:px-52 p-3">
        <p className="text-white font-bold text-md">Starbucks Rewards</p>
      </div>

      {/* Main Section */}
      <div>
        {/* Hero Image Section */}
        <div className="relative">
          <img
            src={pumpkin}
            alt="/"
            className="object-cover w-full h-[280px] md:h-[380px]"
          />
          <div className="absolute top-[0px] md:top-[70px] left-5 md:left-20 lg:left-44 w-[300px] lg:w-[800px] md:w-96 p-5">
            <h3 className="text-white text-2xl md:text-5xl font-semibold">
              FREE COFFEE IS A TAP AWAY
            </h3>
            <h4 className="text-white text-lg font-medium">
              Join now to start collecting Stars.
            </h4>
            <NavLink to="/">
              <button className="bg-green-700 text-white font-bold px-5 py-1 rounded-full my-5 md:my-10">
                Join now
              </button>
            </NavLink>

            <p className="text-white text-lg font-medium">
              <a href="/" className="underline">
                Download and join in the app
              </a>{" "}
              for the best experience.
            </p>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-white py-10 px-4 md:px-20 lg:px-32">
          <div className="text-center">
            <h2 className="font-semibold text-black text-xl md:text-3xl">
              Getting started is easy
            </h2>
            <h3 className="text-black text-sm md:text-lg mt-4 mb-10 md:mb-14">
              Collect Stars and get rewarded in a few steps
            </h3>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-10">
              {/* Step 1 */}
              <div className="text-center w-full md:w-[370px] space-y-3">
                <p className="border-2 p-3 rounded-full text-green-700 border-green-700 mx-auto font-bold w-10 h-10 flex items-center justify-center">
                  1
                </p>
                <p className="text-black font-semibold text-lg">
                  Create an account
                </p>
                <p className="text-gray-700 text-sm">
                  To get started,{" "}
                  <a
                    href="/"
                    className="underline hover:text-green-700 transition"
                  >
                    join now.
                  </a>{" "}
                  You can also{" "}
                  <a
                    href="/"
                    className="underline hover:text-green-700 transition"
                  >
                    join in the app
                  </a>{" "}
                  to access all Starbucks® Rewards benefits.
                </p>
                <p className="text-gray-500 italic text-sm">
                  *You can now join without a Starbucks Card.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center w-full md:w-[370px] space-y-3">
                <p className="border-2 p-3 rounded-full text-green-700 border-green-700 mx-auto font-bold w-10 h-10 flex items-center justify-center">
                  2
                </p>
                <p className="text-black font-semibold text-lg">
                  Order and pay your way
                </p>
                <p className="text-gray-700 text-sm">
                  Use cash, credit, debit, or pay through the app. You'll earn
                  Stars all ways.{" "}
                  <a
                    href="/"
                    className="underline hover:text-green-700 transition"
                  >
                    Learn how.
                  </a>
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center w-full md:w-[370px] space-y-3">
                <p className="border-2 p-3 rounded-full text-green-700 border-green-700 mx-auto font-bold w-10 h-10 flex items-center justify-center">
                  3
                </p>
                <p className="text-black font-semibold text-lg">
                  Collect Stars, earn Rewards
                </p>
                <p className="text-gray-700 text-sm">
                  When you collect Stars, you can redeem them for Rewards — like
                  free food and drinks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cash or Card Section */}
        <div className="bg-[#F2F0EB] h-auto py-10 px-4 md:px-10 lg:px-20 ">
          <div className="text-center grid gap-5">
            <p className="text-black/90 text-lg md:text-2xl font-bold">
              Cash or card, you collect Stars
            </p>
            <p className="text-black text-sm md:text-xl">
              No matter how you pay, you can collect Stars. Those Stars add up
              to (really delicious) Rewards.
            </p>
            <div className="flex gap-5 md:flex-row md:gap-8 items-center w-full md:w-[580px] mx-auto">
              <img src={star25} alt="/" className="size-24 lg:size-44" />
              <img src={card} alt="/" className="size-10 lg:size-20" />
              <div className="text-left">
                <p className="font-semibold text-black/90 text-md md:text-xl">
                  Starbucks Card or mobile app
                </p>
                <p className="text-black/90 text-sm">
                  Use a Starbucks Card or your mobile app to pay.
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex gap-5 md:flex-row md:gap-8 items-center w-full md:w-[580px] mx-auto">
              <img src={star40} alt="/" className="size-24 lg:size-44" />
              <img src={cart} alt="/" className="size-10 lg:size-20" />
              <div className="text-left">
                <p className="font-semibold text-black/90 text-md md:text-xl">
                  Starbucks Card or mobile app
                </p>
                <p className="text-black/90 text-sm">
                  Use a Starbucks Card or your mobile app to pay.
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex gap-5 md:flex-row md:gap-8 items-center w-full md:w-[580px] mx-auto">
              <img src={star50} alt="/" className="size-24 lg:size-44" />
              <img src={ecard} alt="/" className="size-10 lg:size-20" />
              <div className="text-left">
                <p className="font-semibold text-black/90 text-md md:text-xl">
                  Starbucks Card or mobile app
                </p>
                <p className="text-black/90 text-sm">
                  Use a Starbucks Card or your mobile app to pay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Say hello to magical Rewards */}
        <div className="bg-[#1E3932] p-5 text-center">
          <div className="justify-center">
            <p className="text-white font-semibold text-2xl md:text-3xl mb-8">
              Say hello to magical Rewards
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:px-48">
              {/* Reward 1 */}
              <div className="flex flex-col items-center w-full md:w-64 gap-4">
                <img src={cup} alt="/" className="w-24 h-24 md:w-36 md:h-36" />
                <p className="text-white text-sm md:text-lg font-semibold text-center mt-5">
                  Get a free drink, pastry, or slice of cake with every 100
                  Stars you collect.
                </p>
              </div>

              {/* Reward 2 */}
              <div className="flex flex-col items-center w-full md:w-64 gap-4">
                <img
                  src={single}
                  alt="/"
                  className="w-24 h-24 md:w-36 md:h-36"
                />
                <p className="text-white text-sm md:text-lg font-semibold text-center mt-5">
                  Access exclusive perks — like collecting Stars faster with
                  Double Star Days, and a birthday treat.
                </p>
              </div>

              {/* Reward 3 */}
              <div className="flex flex-col items-center w-full md:w-64 gap-4">
                <img
                  src={phonecup}
                  alt="/"
                  className="w-24 h-24 md:w-36 md:h-36"
                />
                <p className="text-white text-sm md:text-lg font-semibold text-center mt-5">
                  Enjoy the convenience of ordering ahead using the app.
                </p>
              </div>
            </div>
          </div>
          <a
            href="/"
            className="underline text-white text-xs md:text-sm mt-5 inline-block"
          >
            *Terms & Conditions apply
          </a>
        </div>

        {/* Keep the Rewards coming */}
        <div className="bg-[#046240] w-full p-5">
          <div className="bg-[#D4E9E2] text-center py-16 px-4 md:px-[200px] lg:px-[409px] grid gap-5">
            <p className="text-black text-2xl md:text-3xl font-semibold">
              Keep the Rewards coming
            </p>
            {/* LOGO */}
            <div className="flex justify-center items-center">
              <img src={grab} alt="" className="w-16 h-16 md:w-24 md:h-24" />
              {/* Divider */}
              <div className="divider divider-horizontal divider-start"></div>
              <img src={lazada} alt="" className="w-12 h-12 md:w-20 md:h-20" />
            </div>
            <p className="text-black text-sm md:text-lg">
              Link your Grab and Lazada accounts to your Starbucks® Rewards to
              collect 1 Star for every ₱40 spent on Starbucks orders on delivery
              or e-Commerce.
            </p>
            <NavLink to="/">
              <button className="text-white text-lg py-2 font-medium bg-green-700 hover:bg-green-600 duration-200 mx-auto rounded-full w-full md:w-60 mt-5">
                Join Starbucks Rewards
              </button>
            </NavLink>
          </div>
        </div>

        {/* Download the app for the best experience */}
        <div className="bg-[#F9F9F9] h-auto md:h-60 p-5 md:p-10">
          <p className="text-center text-black text-2xl md:text-3xl font-semibold">
            Download the app for the best experience
          </p>
          {/* Overflow */}
          <div className="w-full md:w-[900px] flex flex-col md:flex-row gap-5 rounded-xl bg-white items-center mx-auto mt-5 relative">
            <img
              src={appsb}
              alt=""
              className="w-full md:w-96 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            />
            <div className="items-center p-5">
              <p className="text-sm md:text-xl text-black mb-5 md:my-10">
                Load your account, pay with your phone, track your Stars and
                redeem Rewards. The app might just be the best part of
                Starbucks® Rewards.
              </p>
              <div className="flex justify-center gap-5">
                <img src={appstore} alt="/" className="w-24 md:w-36" />
                <img src={playstore} alt="/" className="w-24 md:w-36" />
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-[#F1F0EC] h-auto pt-20 pb-16 px-5 md:pt-44 md:px-28 lg:px-72">
          <p className="text-black text-2xl md:text-3xl mb-5">
            Frequently Asked Questions
          </p>

          {/* ACCORDION */}
          <div className="join join-vertical w-full shadow-xl">
            {[
              "How do I earn a Star?",
              "What rewards can I redeem with Stars?",
              "Do Stars expire?",
              "Do Reward Vouchers expire?",
              "What will happen to my old My Starbucks Rewards account?",
              "What will happen to the remaining balance of my cards from the old My Starbucks Rewards?",
              "How do I check the remaining balance of my cards from the old My Starbucks Rewards?",
              "Will the new card issued with the remaining balance of my old cards be automatically registered to my account?",
              "I am an existing Starbucks Rewards member, how can I earn Stars on my Lazada purchase?",
              "When will the Stars I earned from my Lazada purchase be credited to my Starbucks Rewards account?",
              "Can I earn Stars on purchases from other merchants on Lazada?",
            ].map((question, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item border-stone-300 border-2"
              >
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-black text-md font-semibold">
                  {question}
                </div>
                <div className="collapse-content bg-white">
                  <p className="text-green-800 text-sm font-medium p-2">
                    Starting October 17, 2023, you can collect Stars by paying
                    with your registered Starbucks card (or your registered Card
                    in the mobile app) or thru other payment methods like cash,
                    credit/debit cards, select e-wallets, Starbucks gift
                    certificate or Starbucks e-Gift. You will collect 1 Star for
                    every Php25 spent on beverage, food or merchandise purchased
                    from our stores using a Starbucks Card. Pay with cash,
                    credit/debit cards, select e-wallets, Starbucks gift
                    certificate or Starbucks e-Gift and you can collect 1 Star
                    for every Php50 spent. Stars cannot be earned on purchases
                    of gift certificate, Starbucks Cards or Starbucks Card
                    reloads.
                    <br />
                    <br />
                    Download the Starbucks Philippines app to access your
                    Starbucks Rewards account faster.
                    <br />
                    <br />
                    For purchases in the official Starbucks online store on
                    Lazada, once your Starbucks Rewards account has been
                    successfully linked to your Lazada account, you will earn
                    Stars based on the value of your purchase in the official
                    Starbucks online store on Lazada using any type of payment –
                    cash, debit card, credit card, Lazada wallet at the rate of
                    1 Star for every ₱40 spent.
                    {question }
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="divider"></div>
          <p className="text-black text-2xl md:text-3xl mb-5">
            More Questions?
          </p>
          <h3 className="text-black mb-3">
            We want to help in any way we can. We’ve answered the most commonly
            asked questions.{" "}
            <a href="/" className="underline text-black/80 font-extrabold">
              right over here.
            </a>{" "}
            If you can't find what you're looking for, here's how to{" "}
            <a href="/" className="underline text-black/80 font-extrabold">
              get in touch{" "}
            </a>{" "}
            with us.
          </h3>

          <p className="text-black text-2xl md:text-3xl mb-3">Terms of Use</p>
          <h3 className="text-black">
            For full details on Stars and Starbucks® Rewards program, read our
            terms of use{" "}
            <a href="/" className="underline text-black/80 font-extrabold">
              here.
            </a>
            <br />
            <br />
            DTI Fair Trade Permit No. FTEB-177222 Series of 2023
          </h3>
        </div>


        <Last/>
      </div>
    </>
  );
};

export default Rewards;
