import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import kcLogo from "./khanCraneLogo.webp";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="flex justify-center items-center font-sans">
        <div className="md:h-48 min-h-36 w-2/3 flex flex-col justify-around">
          <div className=" upper flex justify-between items-center p-2">
            <div className="md:flex justify-around items-center w-[13rem] hidden">
              <div className="text-3xl">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div>
                <div className="text-base">Online Appointment :</div>
                <div>9561829120</div>
              </div>
            </div>
            <div className="text-2xl font-semibold flex gap-3 items-center">
              <img src={kcLogo} className="h-16 w-16"></img>Khan Crane
            </div>
            <button className="md:flex justify-center items-center hidden border-2 border-yellow-500 w-28 bg-yellow-500 text-lg">
              Profile
            </button>
            <button className="text-xl md:hidden flex" onClick={toggleButton}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <hr />
          {toggle && (
            <div className="h-[8rem] text-lg font-semibold w-full justify-center items-center md:flex text-center pt-2 pb-2">
               <div>
              <NavLink
                  to="/"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                  onClick={toggleButton}
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/services"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                  onClick={toggleButton}
                >
                  Services
                </NavLink>
              </div>
              <div>
              <NavLink
                  to="/about"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                  onClick={toggleButton}
                >
                  About Us
                </NavLink>
              </div>
              <div>
              <NavLink
                  to="/contact"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                  onClick={toggleButton}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
          <div className="lower flex justify-between items-center p-2">
            <div className="flex  md:w-[8rem] w-full h-6 justify-between items-center text-sm">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-meta"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
            <div className="hidden text-lg font-semibold w-2/4 justify-between items-center md:flex">
              <div>
              <NavLink
                  to="/"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/services"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                >
                  Services
                </NavLink>
              </div>
              <div>
              <NavLink
                  to="/about"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                >
                  About Us
                </NavLink>
              </div>
              <div>
              <NavLink
                  to="/contact"
                  className={(e)=>{return e.isActive?"text-yellow-500":"text-black"}}
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="text-lg font-semibold md:flex hidden">Explore</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
