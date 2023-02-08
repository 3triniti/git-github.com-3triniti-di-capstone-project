import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ServiceBar from "../Components/ServiceBar";

export const ServiceBtn = ({ setView }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleIsOpen = () => {
    setOpen((o) => !o);
  };
  return (
    <div className="md:m-1 lg:ml-8">
      <button
        className="hover:text-teal-500 font-open text-sm"
        onClick={toggleIsOpen}
      >
        SERVICES{" "}
        <span className="text-yellow-400 ml-2 text-xl rotate-90">&#8250;</span>
      </button>
      {isOpen && (
        <div className="absolute top-20 bg-white z-50 text-left">
          <ServiceBar />
        </div>
      )}
    </div>
  );
};
