import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import mat from "../Images/mat.jpg";
import fabric from "../Images/fabric.jpg";

const PlaceMats = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-placeMats bg-center lg:h-96 font-tangerine font-normal text-7xl text-teal-500 text-center"></div>
        <img src={fabric} className=" w-screen h-full lg:hidden" alt="" />
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mt-1 mb-6">
          Place Mats
        </h1>
        <h2 className="font-open  text-center text-2xl">
          Contact us for all product sales and inquiries
        </h2>
        <div className="grid grid-cols-2 mt-8 mb-16 md:m-16 space-y-24">
          <div className="card border-none drop-shadow w-screen md:w-96">
            <div className="card-body">
              <img src={mat} className=" w-48 h-64 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Table center piece (Japanese Kimono band material)
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 150</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>
        </div>
        <div className="md:hidden bg-teal-500 h-1.5 w-5/6 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
        <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default PlaceMats;
