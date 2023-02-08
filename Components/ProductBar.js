import React from "react";
import { Link } from "react-router-dom";

const ProductBar = () => {
  return (
    <>
      <div className="z-10 box p-6 pt-10 mt-6 font-open text-sm tracking-tight">
        <div className=" z-20 pb-4">
          <Link
            to="/cups-and-plates"
            className=" z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            CUPS & PLATES
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/pots-and-bowls"
            className=" z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            POTS & BOWLS
          </Link>
        </div>
        <div className="z-10 pb-4">
          <Link
            to="/tea"
            className=" z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            TEA
          </Link>
        </div>
        <div className=" z-10 pb-4">
          <Link
            to="/place-mats"
            className="z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            PLACE MATS
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductBar;
