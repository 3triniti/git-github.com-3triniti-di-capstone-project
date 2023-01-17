import React from "react";
import { Link } from "react-router-dom";
import { CreatorBtn } from "../Buttons/CreatorBtn";
import logo from "../Images/suehirologo1.jpeg";
import { ServiceBtn } from "../Buttons/ServiceBtn";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex bg-transparent pl-12 pt-6 font-open text-sm text-black font-bold tracking-widest rounded-md">
          <CreatorBtn />
          <ServiceBtn />

          <Link to="/history" className="pl-12 pr-3 tracking-widest">
            HISTORY
          </Link>
          <Link
            to="/"
            className=" ml-48 font-tangerine  text-cyan-600 text-6xl"
          >
            Suehiro
          </Link>
          <div className="w-24 h-16 absolute inset-y-0 right-0 mr-3 pt-3">
            <img src={logo} className="" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
