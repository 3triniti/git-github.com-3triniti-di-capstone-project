import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ProductBar from "./ProductBar";
import ServiceBar from "./ServiceBar";

export const Burger = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleIsOpen = () => {
    setOpen((o) => !o);
  };

  return (
    <div className={className}>
      <button
        onClick={toggleIsOpen}
        className="text-slate-500 flex flex-col gap-1 ml-8"
      >
        <div className="w-8 h-1 bg-teal-500" />
        <div className="w-8 h-1 bg-teal-500" />
        <div className="w-8 h-1 bg-teal-500" />
      </button>
      {isOpen && (
        <div className="z-50 absolute top-16 bg-white left-0 right-0">
          <ServiceBar />
          <ProductBar />
        </div>
      )}
    </div>
  );
};

export default Burger;
