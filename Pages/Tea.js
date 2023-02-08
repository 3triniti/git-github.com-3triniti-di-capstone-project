import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Tea = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-tea bg-center h-96 font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Tea
        </div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div className=" pt-16 mb-16 ml-32 space-y-24">
          <div className="flex">
            <p className="font-open font-normal text-sm">
              Product is not ready
            </p>
          </div>
        </div>
        <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default Tea;
