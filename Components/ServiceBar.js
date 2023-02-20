import React from "react";
import { Link } from "react-router-dom";

const ServiceBar = () => {
  return (
    <>
      <div className="z-10 box p-6 pt-10 font-open text-sm tracking-tight">
        <div className=" z-20 pb-4">
          <Link
            to="/special-events"
            className=" z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            SPECIAL EVENTS
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/weddings"
            className="z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            WEDDINGS
          </Link>
        </div>
        <div className="z-10 pb-4">
          <Link
            to="/retreats"
            className="z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            RETREATS
          </Link>
        </div>
        <div className="z-10 pb-4">
          <Link
            to="/community-outreach"
            className="z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            COMMUNITY OUTREACH
          </Link>
        </div>
        <div className="z-10 pb-4">
          <Link
            to="/workshops"
            className="z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            WORKSHOPS
          </Link>
        </div>
        <div>
          <Link
            to="/yukata-rental"
            className=" z-10 font-open font-normal text-sm text-slate-800 hover:text-teal-500"
          >
            YUKATA RENTAL
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceBar;
