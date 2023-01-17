import React from "react";
import { Link } from "react-router-dom";

const ServiceBar = () => {
  return (
    <>
      <div className="box ml-40 w-48 h-96 font-open text-sm tracking-tight">
        <div className="pb-4">
          <Link
            to="/special-events"
            className="font-open font-normal text-sm text-black"
          >
            SPECIAL EVENTS
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/weddings"
            className="font-open font-normal text-sm text-black"
          >
            WEDDINGS
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/retreats"
            className="font-open font-normal text-sm text-black"
          >
            RETREATS
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/community-outreach"
            className="font-open font-normal text-sm text-black"
          >
            COMMUNITY OUTREACH
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/workshops"
            className="font-open font-normal text-sm text-black"
          >
            WORKSHOPS
          </Link>
        </div>
        <div>
          <Link
            to="/yukata-rental"
            className="font-open font-normal text-sm text-black"
          >
            YUKATA RENTAL
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceBar;
