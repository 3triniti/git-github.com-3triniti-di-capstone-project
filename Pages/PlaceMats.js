import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import mat from "../Images/mat.jpg";

const PlaceMats = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-placeMats bg-center h-96 font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Place Mats
        </div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h2 className="font-open  text-center text-2xl">
          Contact us for all product sales and inquiries
        </h2>
        <div className=" pt-16 mb-16 ml-32 space-y-24">
          <div className="flex">
            <img src={mat} className=" w-48 h-64 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Table center piece (Japanese Kimono band material)
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-20">
                Price - TBD
              </div>
              <button className=" ml-8 w-32 h-10 mt-20 bg-teal-400 text-white hover:bg-white hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default PlaceMats;
