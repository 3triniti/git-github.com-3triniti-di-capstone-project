import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import suehiroKids from "../Images/suehirokids1.jpg";

const CommunityOutreach = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div className="flex pt-16 mb-10">
          <img src={suehiroKids} className=" w-80 h-96 pl-8" alt="" />
          <p className="font-open font-thin text-base text-black text-left ml-10 mr-10 mb-16">
            means an activity of providing services to any populations who might
            not otherwise have access to those services. In addition to
            delivering services, outreach has an educational role, raising the
            awareness of existing services.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityOutreach;
