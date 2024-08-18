import React from "react";

const Services = () => {
  return (
    <div className="min-h-[48rem] w-full bg-gray-100 flex flex-col justify-center items-center">
      <div className="md:text-center text-start">
        <div className="relative flex flex-col justify-center ">
          <div className="text-base pt-20 pl-4">
            CRANE Services
            <div className="pt-6 gap-5">
              <div className="text-5xl font-bold flex gap-5">
                <div className="w-1 bg-yellow-500"></div>OUR SERVICES
              </div>
            </div>
            <div className="text-base pt-4">
              Photo bhej sab chiz kaa kya kya karte ho dahihandi or <br />
              kisi client kaa kuch bhej
            </div>
          </div>
          <div className="pt-10"></div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:items-start items-center"></div>
    </div>
  );
};

export default Services;
