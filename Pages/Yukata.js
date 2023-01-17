import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import yukata3 from "../Images/yukata3.jpg";

const Workshops = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-yukata2 bg-center h-96"></div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div className="flex pt-16 mb-16">
          <div className="font-open font-thin text-base text-black text-left mr-10 mb-16 pt-10"></div>
          <img src={yukata3} className="w-80 h-96" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workshops;
