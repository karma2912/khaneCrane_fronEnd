import React, { useState, useEffect, useRef } from "react";
import kcImg from "./khanCrane2.jpg";

const Page2 = () => {
  const [toggle1, setToggle1] = useState("hidden");
  const [toggle2, setToggle2] = useState("hidden");
  const [toggle3, setToggle3] = useState("hidden");
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  const toggleButton1 = () => {
    setToggle1((prevDisp) => (prevDisp === "hidden" ? "block" : "hidden"));
    setToggle2("hidden");
    setToggle3("hidden");
  };

  const toggleButton2 = () => {
    setToggle2((prevDisp) => (prevDisp === "hidden" ? "block" : "hidden"));
    setToggle1("hidden");
    setToggle3("hidden");
  };

  const toggleButton3 = () => {
    setToggle3((prevDisp) => (prevDisp === "hidden" ? "block" : "hidden"));
    setToggle1("hidden");
    setToggle2("hidden");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (pageRef.current) observer.observe(pageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={pageRef}
      className="w-full overflow-hidden min-h-[52rem] flex flex-col md:flex-row md:justify-center items-center bg-white"
    >
      {/* Image Container */}
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={kcImg}
          className="md:h-[40rem] h-[30rem] md:w-[30rem] max-w-full md:rounded-none rounded-xl"
          alt="Khan Crane"
        />
      </div>

      {/* Text Content */}
      <div
        className={`transition-transform duration-1000 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-10"
        }`}
      >
        <div className="relative flex flex-col md:pl-40 pl-6 justify-center">
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
              Relevant and Trusted in the market from 20 YEARS. More than 1000+
              <br /> happy customers from the date we started <br />
            </div>
          </div>

          {/* Accordion Section */}
          <div className="pt-10 mb-10 md:w-[40rem] w-[20rem]">
            <div id="accordion-collapse" data-accordion="collapse">
              {/* Accordion Item 1 */}
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 rounded-t-xl hover:bg-gray-100"
                  onClick={toggleButton1}
                >
                  <span>What is better in KhanCranes?</span>
                  <svg className="w-3 h-3 rotate-180 shrink-0" viewBox="0 0 10 6">
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
                className={`${toggle1} transition-all duration-500 overflow-hidden`}
              >
                <div className="p-5 border border-gray-200">
                  <p className="mb-2 text-gray-500">Bata Bhai kya likhu isme</p>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 hover:bg-gray-100"
                  onClick={toggleButton2}
                >
                  <span>Ye bhi bata?</span>
                  <svg className="w-3 h-3 rotate-180 shrink-0" viewBox="0 0 10 6">
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
                className={`${toggle2} transition-all duration-500 overflow-hidden`}
              >
                <div className="p-5 border border-gray-200">
                  <p className="mb-2 text-gray-500">Samjha</p>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 hover:bg-gray-100"
                  onClick={toggleButton3}
                >
                  <span>Or Ye Bhi?</span>
                  <svg className="w-3 h-3 rotate-180 shrink-0" viewBox="0 0 10 6">
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
                className={`${toggle3} transition-all duration-500 overflow-hidden`}
              >
                <div className="p-5 border border-gray-200">
                  <p className="mb-2 text-gray-500">Thanku</p>
                </div>
              </div>
            </div>
          </div> {/* End of Accordion */}
        </div>
      </div>
    </div>
  );
};

export default Page2;
