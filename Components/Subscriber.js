import React from "react";

function Subscribe() {
  return (
    <>
      <div className=" flex-wrap md:hidden md:subscribe-box flex border-solid border-2 bg-transparent border-teal-500 rounded-md lg:w-11/12 h-24 mt-10 lg:ml-14 mb-10">
        <div className="md:flex">
          <div className="mt-1 font-open font-normal text-2xl text-slate-700 pl-8 lg:pt-2">
            Subscribe!
          </div>

          <p className="md:hidden ml-1 mt-1 lg:font-open lg:font-thin lg:text-normal text-slate-700 lg:pl-8 lg:pt-2">
            Receive selected items and information monthly
          </p>
        </div>
        <div className="border-solid border-2 bg-transparent font-open text-normal text-sm text-slate-400 border-slate-200 w-64 lg:ml-0 md:w-80 h-20 md:ml-12 md:mt-4">
          E-Mail Address
        </div>
        <div>
          <button className="bg-teal-500 text-slate-100 hover:bg-white hover:text-teal-500 font-open font-normal rounded-md text-sm md:w-52 md:h-10 md:ml-3 md:mt-6">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
