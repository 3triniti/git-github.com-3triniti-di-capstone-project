import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import bowl from "../Images/bowl.jpg";
import bowl2 from "../Images/bowl2.jpg";
import bowl3 from "../Images/bowl3.jpg";
import pot from "../Images/pot.jpg";
import potBowl from "../Images/1000001555.jpg";

const PotsBowls = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-bowls bg-top md:h-96 font-tangerine font-normal text-7xl text-teal-500 text-center"></div>
        <img src={potBowl} className=" w-screen h-full md:hidden" alt="" />
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mt-1 mb-6">
          Pots & Bowls
        </h1>
        <h2 className="font-open  text-center text-2xl">
          Contact us for all product sales and inquiries
        </h2>
        <div className="grid md:grid-cols-2 md:m-16">
          <div className="card border-none drop-shadow w-screen md:w-96 md:mb-0">
            <div className="card-body">
              <img src={pot} className=" w-48 h-60 rounded-md" alt="" />
              <h1 className="font-open font-normal text-2xl mt-3">
                Kisenyou milk pot
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 35</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>

          <div className="card border-none drop-shadow w-screen md:w-96">
            <div className="card-body">
              <img src={bowl} className=" w-48 h-52 rounded-md" alt="" />
              <h1 className="font-open font-normal text-2xl mt-3">
                Cherry Blossom bowl
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 40</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>

          <div className="card border-none drop-shadow w-screen md:w-96">
            <div className="card-body">
              <div className="flex">
                <img
                  src={bowl2}
                  className=" w-32 h-40 mr-3 rounded-md"
                  alt=""
                />
                <img src={bowl3} className=" w-52 h-40 rounded-md" alt="" />
              </div>
              <h1 className="font-open font-normal text-2xl mt-3">
                Kisenyou bowl (medium size)
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 40</p>
            </div>
            <button className=" ml-4 w-1/2 md:w-11/12 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>
        </div>
        <div className="md:hidden bg-teal-500 h-1.5 w-5/6 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24 mt-12"></div>
        <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default PotsBowls;
