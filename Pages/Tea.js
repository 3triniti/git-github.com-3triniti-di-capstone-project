import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import tea from "../Images/tea.jpg";

const Tea = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-tea bg-center md:h-96 font-tangerine font-normal text-7xl text-teal-500 text-center"></div>
        <img src={tea} className=" w-screen h-full md:hidden" alt="" />
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mt-1 mb-6">
          Tea
        </h1>
        <div className=" pt-16 mb-16 ml-32 space-y-24">
          <div className="flex">
            <p className="font-open font-normal text-sm">
              Product is not ready
            </p>
          </div>
        </div>
        <div className="md:hidden bg-teal-500 h-1.5 w-5/6 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
        <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default Tea;
