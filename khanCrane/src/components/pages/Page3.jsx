import React from "react";
import building1 from "./hydraCrane2.webp";
import faranaCrane from "./faranaCrane.jpg";
import forkLift from "./forkLift.webp";

const Page3 = () => {
  return (
    <>
      <div className="min-h-[68rem] w-full bg-gray-100 flex flex-col justify-around items-center">
        <div className="md:text-center text-start">
          <div className="relative flex flex-col justify-center ">
            <div className="text-base pt-20 pl-6">
              OUR SERVICES
              <div className="pt-6 gap-5">
                <div className="text-5xl font-bold flex gap-5">
                  <div className="w-1 bg-yellow-500"></div>WE OFFER TOP CRANES
                </div>
              </div>
              <div className="text-base pt-4">
                We have variety of cranes suitable for your needs and
                requirements <br />
                Here are our few cranes which are shown below
              </div>
            </div>
            <div className="pt-10"></div>
          </div>
        </div>
        <div className="w-3/4 flex md:flex-row flex-col justify-around items-center">
          <div className="flex flex-col items-center md:pb-10 pb-16">
            <img src={faranaCrane} className="h-[28rem] w-[25rem] shadow-2xl border-2 border-yellow-500"></img>
            <div className="h-[10rem] w-4/5 bg-white -mt-10 flex flex-col justify-between items-center shadow-2xl">
              <div className="h-full flex flex-col justify-evenly items-center text-xl font-semibold">Farana Crane
                <div className="text-base font-normal">Use for lifting Heavy objects</div>
              </div>
              <div className="w-full">
              <button className="h-12 w-full border-2 border-gray-200 shadow-2xl font-semibold flex justify-center gap-4 items-center">LEARN MORE<i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:pb-10 pb-16">
            <img src={forkLift} className="h-[28rem] w-[25rem] shadow-2xl border-2 border-yellow-500"></img>
            <div className="h-[10rem] w-4/5 bg-white -mt-10 flex flex-col justify-between items-center shadow-2xl">
              <div className="h-full flex flex-col justify-evenly items-center text-xl font-semibold">ForkLift Crane
                <div className="text-base font-normal">Use for lifting Heavy objects</div>
              </div>
              <div className="w-full">
              <button className="h-12 w-full border-2 border-gray-200 shadow-2xl font-semibold flex justify-center gap-4 items-center">LEARN MORE<i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:pb-10 pb-16">
            <img src={building1} className="h-[28rem] w-[25rem] shadow-2xl border-2 border-yellow-500"></img>
            <div className="h-[10rem] w-4/5 bg-white -mt-10 flex flex-col justify-between items-center shadow-2xl">
              <div className="h-full flex flex-col justify-evenly items-center text-xl font-semibold">Hydra Crane
                <div className="text-base font-normal">Use for lifting Heavy objects</div>
              </div>
              <div className="w-full">
                <button className="h-12 w-full border-2 border-gray-200 shadow-2xl font-semibold flex justify-center gap-4 items-center">LEARN MORE<i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="border-2 font-semibold text-base border-yellow-500 bg-yellow-500 w-36 h-14 text-white shadow-2xl">
            MORE SERVICES
          </button>
        </div>
      </div>
    </>
  );
};

export default Page3;
