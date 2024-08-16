import React, { useState } from "react";

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    const toggleButton=()=>{
      setToggle(!toggle)
    }
  return (
    <>
      <div className="flex justify-center items-center font-sans">
        <div className="md:h-48 h-36 w-2/3 flex flex-col justify-around">
          <div className=" upper flex justify-between items-center p-2">
            <div className="md:flex justify-around items-center w-[13rem] hidden">
              <div className="text-3xl">
                <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div>
                <div className="text-base">Online Appointment :</div>
                <div>9561829120</div>
              </div>
            </div>
            <div className="text-lg font-semibold">Khan Crane</div>
            <button className="md:flex hidden border-2 p-1 rounded-xl bg-yellow-300 text-lg">
              Profile
            </button>
            <button className="text-xl md:hidden flex" onClick={toggleButton}><i class="fa-solid fa-bars"></i></button>
          </div>
          <hr />
          <div className="lower flex justify-between items-center p-2 z-0">
            <div className="flex  md:w-[8rem] w-full h-6 justify-between items-center text-sm">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-meta"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="hidden text-lg font-semibold w-2/4 justify-between items-center md:flex">
              <div>Home</div>
              <div>Services</div>
              <div>About Us</div>
              <div>Contact</div>
            </div>
            <div className="text-lg font-semibold md:flex hidden">Explore</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
