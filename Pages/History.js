import React from "react";
import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar";

const History = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-history w-screen h-96 bg-no-repeat">
        <div className="font-noto text-9xl text-right pt-10 pr-24">お</div>
        <div className="font-noto text-9xl text-right pt-10 pr-24">も</div>
        <div className="font-noto text-9xl text-right pt-10 pr-24">て</div>
        <div className="font-noto text-9xl text-right pt-10 pr-24">な</div>
        <div className="font-noto text-9xl text-right pt-10 pr-24 pb-8">し</div>
        <div className="bg-violet-900 w-screen h-96 -mt-96"></div>
        <div className=" bg-white w-96 h-96 ml-16 -mt-96"></div>
        <Footer />
      </div>
    </div>
  );
};

export default History;
