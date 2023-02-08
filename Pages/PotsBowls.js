import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import bowl from "../Images/bowl.jpg";
import bowl2 from "../Images/bowl2.jpg";
import bowl3 from "../Images/bowl3.jpg";
import pot from "../Images/pot.jpg";

const PotsBowls = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-bowls bg-top h-96 font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Pots & Bowls
        </div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h2 className="font-open  text-center text-2xl">
          Contact us for all product sales and inquiries
        </h2>
        <div className=" pt-16 mb-16 ml-32 space-y-24">
          <div className="flex">
            <img src={pot} className=" w-48 h-60 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Kisenyou milk pot
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-20">
                $ 35
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={bowl} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Cherry Blossom bowl
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 40
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={bowl2} className=" w-48 h-52 rounded-md" alt="" />
            <img src={bowl3} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Kisenyou bowl (medium size)
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 40
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
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

export default PotsBowls;
