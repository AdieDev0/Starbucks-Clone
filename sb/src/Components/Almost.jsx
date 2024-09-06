import React from "react";
import golden from "../assets/Golden.jpeg";
import feast from "../assets/Feast.jpeg";
import summer from "../assets/Summer.jpeg";
import head from "../assets/Head.jpg";
import grab from "../assets/Grab.jpeg";

const Almost = () => {
  return (
    <div className="bg-white relative lg:py-10 py-5 lg:px-32 md:px-24  h-auto w-full grid gap-y-5">
      <div className="flex lg:flex-row md:flex-row flex-col gap-5">
        {/* 1 */}
        <div className="rounded-none lg:rounded-lg md:rounded-lg bg-[#1e3932] lg:w-[625px] lg:h-[600px] md:h-[500px] ">
          <img
            src={golden}
            alt="/"
            className="object-cover rounded-none lg:rounded-t-lg md:rounded-t-lg"
          />
          <div className="lg:px-24 px-10 py-10 text-center grid gap-y-5">
            <p className="font-bold lg:text-2xl md:text-2xl text-2xl text-white">
              Always Golden
            </p>
            <p className="text-white text-md md:text-base lg:text-base">
              Add a playful twist to your usual with our new beverages—a
              delightful indulgence to brighten your day.
            </p>
            <button className="border mx-auto px-5 text-md py-1 font-bold  md:text-base lg:text-base rounded-full text-white hover:bg-white/10 duration-150">
              Sip, sip, go
            </button>
          </div>
        </div>
        {/* 2 */}
        <div className="rounded-none lg:rounded-lg md:rounded-lg bg-[#1e3932] lg:w-[625px] lg:h-[600px] md:h-[500px] ">
          <img
            src={feast}
            alt="/"
            className="object-cover rounded-none lg:rounded-t-lg md:rounded-t-lg"
          />
          <div className="lg:px-24 px-10 py-10 text-center grid gap-y-5">
            <p className="font-bold lg:text-2xl md:text-2xl text-2xl text-white">
              It’s A Feast
            </p>
            <p className="text-white text-md md:text-base lg:text-base">
              Bite into the bliss with every flavor this season.
            </p>
            <button className="border mx-auto px-5 text-md py-1 font-bold  md:text-base lg:text-base rounded-full text-white hover:bg-white/10 duration-150">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col gap-5">
        {/* 3 */}
        <div className="rounded-none lg:rounded-lg md:rounded-lg bg-[#d4e9e2] lg:w-[625px] lg:h-[600px] md:h-[500px]">
          <img
            src={summer}
            alt="/"
            className="object-cover rounded-none lg:rounded-t-lg md:rounded-t-lg"
          />
          <div className="lg:px-24 px-10 py-10 text-center grid gap-y-5">
            <p className="font-bold lg:text-2xl md:text-2xl text-2xl text-green-950">
              Summer Bears
            </p>
            <p className="text-green-950 text-md md:text-base lg:text-base">
              Fill your favorite drink and go wherever the day takes you.
            </p>
            <button className="border border-green-950 mx-auto px-5 text-md py-1 font-bold  md:text-base lg:text-base rounded-full text-green-950 hover:bg-white/10 duration-150">
              See more
            </button>
          </div>
        </div>
        {/* 4 */}
        <div className="rounded-none lg:rounded-lg md:rounded-lg bg-[#d4e9e2] lg:w-[625px] lg:h-[600px] md:h-[500px]">
          <img
            src={head}
            alt="/"
            className="object-cover rounded-none lg:rounded-t-lg md:rounded-t-lg w-full lg:h-[365px] md:h-[365px] h-[250px]"
          />
          <div className="lg:px-24 px-10 py-10 text-center grid gap-y-5">
            <p className="font-bold lg:text-2xl md:text-2xl text-2xl text-green-950">
              No time to head out?
            </p>
            <p className="text-green-950 text-md md:text-base lg:text-base">
              Have your favorites delivered straight to your doorstep.
            </p>
            <button className="border border-green-950 mx-auto px-5 text-md py-1 font-bold md:text-base lg:text-base rounded-full text-green-950 hover:bg-white/10 duration-150">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#faf6ee] w-full lg:h-[300px] md:h-[300px] h-[480px] flex lg:flex-row md:flex-row flex-col">
        <img
          src={grab}
          alt="/"
          className="object-cover rounded-l-lg lg:w-[620px] "
        />
        <div className="py-10 text-center grid gap-y-5 lg:w-[450px] mx-auto lg:px-0 md:px-0 px-5">
          <p className="font-bold lg:text-2xl md:text-2xl text-2xl text-black">
            Starbucks Stories
          </p>
          <p className="text-black text-md md:text-base lg:text-base">
            Continuing to inspire and nurture the human spirit–one person, one
            cup and one neighborhood at a time.
          </p>
          <button className="border mx-auto px-5 font-bold text-md py-1 md:py-0 lg:py-0 md:text-base lg:text-base rounded-full text-black border-black hover:bg-black/10 duration-150">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Almost;
