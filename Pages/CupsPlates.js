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
import cupPlate from "../Images/1000001554.jpg";

const CupsPlates = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-cupsPlates bg-right md:h-96 font-tangerine font-normal text-7xl text-teal-500 text-center"></div>
        <img src={cupPlate} className=" w-screen h-full md:hidden" alt="" />
        <div className="bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mt-1 mb-6">
          Cups & Plates
        </h1>
        <h2 className="font-open  text-center text-2xl">
          Contact us for all product sales and inquiries
        </h2>

        <div className="wrapper columns-1 md:columns-2 mt-8 mb-16 md:m-16 space-y-24">
          <div className="card border-none drop-shadow w-screen md:w-96">
            <div className="card-body">
              <img src={cup} className=" w-48 h-52 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Nandina Fruit mug
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 35</p>
            </div>
            <button className=" w-48 h-10 ml-4 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md ">
              Contact us
            </button>
          </div>
          <div className="card border-none drop-shadow-md w-screen md:w-96">
            <div className="card-body">
              <img src={cup2} className=" w-48 h-52 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Hand painted Cherry Blossom mug
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 35</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>
          <div className="card border-none drop-shadow-md w-screen md:w-96">
            <div className="card-body">
              <img src={cup3} className=" w-48 h-52 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Kisenyou cup
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 35</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>

          <div className="card border-none drop-shadow-md w-screen md:w-96">
            <div className="card-body">
              <img src={cups} className=" w-48 h-52 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Sake cup set
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 35</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>

          <div className="card border-none drop-shadow-md w-screen md:w-96">
            <div className="card-body">
              <img src={cups2} className=" w-48 h-52 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Maple Leaf Sake cup set
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 50</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>

          <div className="card border-none drop-shadow-md w-screen md:w-96">
            <div className="card-body">
              <img src={plate} className=" w-48 h-52 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Kisenyou Dinner plate (medium size)
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 25</p>
            </div>
            <button className=" ml-4 w-48 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>

          <div className="card border-none drop-shadow-md w-screen md:w-96">
            <div className="card-body">
              <img src={plates} className="w-64 h-48 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                Camellia Incense holder and plate (small size)
              </h1>
              <p className="font-open font-normal text-xl mt-3">
                $ 25 sets sold separately
              </p>
            </div>
            <button className=" ml-4 w-64 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
              Contact us
            </button>
          </div>

          <div className="card border-none drop-shadow-md w-screen md:w-96">
            <div className="card-body">
              <img src={plates2} className=" w-64 h-48 rounded-md" alt="" />

              <h1 className="font-open font-normal text-2xl mt-3">
                small multi-colored plate
              </h1>
              <p className="font-open font-normal text-xl mt-3">$ 15 each</p>
            </div>
            <button className=" ml-4 w-64 h-10 mb-3 bg-teal-400 text-slate-100 hover:bg-slate-300 hover:text-teal-500 rounded-md">
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

export default CupsPlates;
