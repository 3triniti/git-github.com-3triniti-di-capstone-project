import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import cup from "../Images/cup.jpg";
import plate from "../Images/plate.jpg";
import plates from "../Images/plates.jpg";
import cup2 from "../Images/cup2.jpg";
import cup3 from "../Images/cup3.jpg";
import plates2 from "../Images/plates2.jpg";
import cups from "../Images/cups.jpg";
import cups2 from "../Images/cups2.jpg";

const CupsPlates = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-cupsPlates bg-right h-96 font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Cups & Plates
        </div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h2 className="font-open  text-center text-2xl">
          Contact us for all product sales and inquiries
        </h2>
        <div className=" pt-16 mb-16 ml-32 space-y-24">
          <div className="flex">
            <img src={cup} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Nandina Fruit mug
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 35
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={cup2} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Hand painted Cherry Blossom mug
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 35
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={cup3} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Kisenyou cup
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 35
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={cups} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Sake cup set
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 35
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={cups2} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Maple Leaf Sake cup set
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 50
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={plate} className=" w-48 h-52 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Kisenyou Dinner plate (medium size)
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-12">
                $ 25
              </div>
              <button className=" ml-8 w-32 h-10 mt-14 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={plates} className="w-64 h-48 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                Camellia Incense holder and plate (small size)
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-10">
                $ 25 sets sold separately
              </div>
              <button className=" ml-8 w-32 h-10 mt-12 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="flex">
            <img src={plates2} className=" w-64 h-48 rounded-md" alt="" />
            <div>
              <h1 className="font-open font-normal text-2xl ml-8">
                small multi-colored plate
              </h1>
              <div className="font-open font-normal text-xl ml-8 mt-10">
                $ 15 each
              </div>
              <button className=" ml-8 w-32 h-10 mt-12 bg-teal-400 text-white hover:bg-slate-300 hover:text-teal-400 rounded-md">
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

export default CupsPlates;
