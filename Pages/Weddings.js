import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import wedding2 from "../Images/wedding2.jpg";

const Weddings = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-wedding4 bg-center h-96"></div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div className="font-sans text-xl text-black text-left mr-10 mb-16 pt-10">
          <img src={wedding2} className="w-80 h-96 pl-8" alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Weddings;
