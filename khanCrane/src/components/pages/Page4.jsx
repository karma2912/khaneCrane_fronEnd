import React from "react";
import crane1 from "./crane1.jpg";
import crane6 from "./crane2.jpg";
import crane5 from "./crane3.jpg";
import crane4 from "./crane4.jpg";
import crane2 from "./khanCrane2.jpg";
import crane3 from "./crane6.jpg";

const Page4 = () => {
  return (
    <>
      <div className="min-h-[48rem] w-full bg-gray-100 flex flex-col justify-center items-center">
        <div className="md:text-center text-start">
          <div className="relative flex flex-col justify-center ">
            <div className="text-base pt-20 pl-6">
              CRANE PROJECTS
              <div className="pt-6 gap-5">
                <div className="text-5xl font-bold flex gap-5">
                  <div className="w-1 bg-yellow-500"></div>OUR RECENT PROJECTS
                </div>
              </div>
              <div className="text-base pt-4">
                We are ruling this market in kandivali since 20 years.Here{" "}
                <br />
                are our few projects and work on sites
              </div>
            </div>
            <div className="pt-10"></div>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <div>
            <img src={crane1} className="w-[30rem] p-5"></img>
          </div>
          <div>
            <img src={crane2} className="h-[30rem] p-5"></img>
          </div>
          <div>
            <img src={crane3} className="w-[30rem] p-5"></img>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <div>
            <img src={crane4} className="w-[30rem] p-5"></img>
          </div>
          <div>
            <img src={crane5} className="h-[30rem] p-5"></img>
          </div>
          <div>
            <img src={crane6} className="w-[30rem] p-5"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
