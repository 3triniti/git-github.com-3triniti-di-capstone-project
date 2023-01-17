import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import workshop2 from "../Images/workshop2.jpg";

const Workshops = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-workshop4 bg-center w-screen h-96"></div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div className="flex pt-16 mb-16">
          <img src={workshop2} className=" w-80 h-96 pl-8" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workshops;
