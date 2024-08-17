import React, { useState } from "react";
import kcImg from "./khanCrane2.jpg";

const Page2 = () => {
    const [toggle1,setToggle1] = useState('hidden')
    const [toggle2,setToggle2] = useState("hidden")
    const [toggle3,setToggle3] = useState("hidden")
    const toggleButton1=()=>{
        console.log("Clicked")
        setToggle1(prevDisp=>(prevDisp==="hidden" ? "block":"hidden"))
        setToggle2("hidden")
        setToggle3("hidden")
       console.log(toggle1)
    }
    const toggleButton2=()=>{
        console.log("Clicked")
        setToggle2(prevDisp=>(prevDisp==="hidden" ? "block":"hidden"))
        setToggle1("hidden")
        setToggle3("hidden")
       console.log(toggle1)
    }
    const toggleButton3=()=>{
        console.log("Clicked")
        setToggle3(prevDisp=>(prevDisp==="hidden" ? "block":"hidden"))
        setToggle1("hidden")
        setToggle2("hidden")
       console.log(toggle1)
    }
  return (
    <>
      <div className="min-h-[52rem] w-full bg-white flex md:flex-row flex-col md:justify-center md:pt-0 pt-10 items-center">
        <div className="">
          <img src={kcImg} className="md:h-[40rem] md:rounded-none rounded-xl h-[30rem] md:w-[30rem]" />
        </div>
        <div>
          <div className="relative  flex flex-col md:pl-40 pl-6 justify-center">
            <div className="text-lg pt-20">
              INTRODUCTION OF US
              <div className="pt-6 gap-5">
                <div className="text-5xl font-bold flex gap-5">
                  <div className="w-1 bg-yellow-500"></div>HOW WE BECAME BEST
                  <br />
                  AMONG OTHERS
                </div>
              </div>
              <div className="text-base pt-4">
                Relevant and Trusted in the market from 20 YEARS . More than
                1000+
                <br /> happy customers from the date we started <br />
              </div>
            </div>
            <div className="pt-10 mb-10 md:w-[40rem] w-[20rem]">
              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1" onClick={toggleButton1}
                  >
                    <span >What is better in KhanCranes?</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className={`${toggle1}`}
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Bata Bhai kya likhu isme
                    </p>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-2" onClick={toggleButton2}
                  >
                    <span>Ye bhi bata?</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-2"
                  className={`${toggle2}`}
                  aria-labelledby="accordion-collapse-heading-2"
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                     Samjha
                    </p>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-3" onClick={toggleButton3}
                  >
                    <span>
                      Or Ye Bhi?
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-3"
                  className={`${toggle3}`}
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Thanku
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
