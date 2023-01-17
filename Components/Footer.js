import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/suehirologo1.jpeg";
import { CreatorBtn2 } from "../Buttons/CreatorBtn2";
import { ServiceBtn2 } from "../Buttons/ServiceBtn2";

function Footer() {
  return (
    <>
      <div className="flex bg-slate-100 w-screen h-64 mt-2">
        <img src={logo} className="w-60 h-64" alt="" />
        <div className="pl-16 mt-10">
          <div className="">
            <Link to="/" className="text-cyan-600  font-open text-xs">
              HOME
            </Link>
            <CreatorBtn2 />
            <ServiceBtn2 />
            <div className="pt-6">
              <Link to="/history" className="text-cyan-600 font-open text-xs">
                HISTORY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
