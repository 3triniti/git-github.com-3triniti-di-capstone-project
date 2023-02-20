import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import logo2 from "../Images/Kauai Tea Ceremony logo long (1).png";
// import NavButton from "../Buttons/NavButton";

import ProductBar from "../Components/ProductBar";
import ServiceBar from "../Components/ServiceBar";
import Burger from "./Burger";

import { ServiceBtn } from "../Buttons/ServiceBtn";
import { ProductBtn } from "../Buttons/ProductBtn";
// import { useScreenSize } from "/hooks/useScreenSize";

function Navbar() {
  // const screenSize = useScreenSize();

  return (
    <>
      <nav className="grid grid-cols-[1fr_auto] items-center md:grid-cols-[auto_1fr_auto] py-2 px-2 h-36">
        <Burger className="lg:hidden" />
        <div className="hidden lg:grid grid-cols-3 gap-2 place-items-center">
          <Link
            to="/creators"
            className="hover:text-teal-500 font-open text-sm tracking-wider lg:mr-0"
          >
            CREATORS
          </Link>
          <ServiceBtn title="SERVICES" Dropdown={ServiceBar} />
          <ProductBtn title="PRODUCTS" Dropdown={ProductBar} />
        </div>
        <Link to="/" className="w-44  md:w-80 place-self-center">
          <img
            src={logo2}
            className="z-50 w-full md:hover:opacity-70 drop-shadow-sm"
            alt=""
          ></img>
        </Link>
        <div className="flex">
          <div className="hidden md:grid grid-cols-3 lg:flex justify-end items-center gap-20">
            <Link
              to="/history"
              className="hover:text-teal-500 font-open text-sm tracking-wider m-2 lg:ml-20"
            >
              HISTORY
            </Link>
            <Link
              to="/contact"
              className="hover:text-teal-500 font-open text-sm tracking-wider lg:mr-36"
            >
              CONTACT
            </Link>
          </div>
          <div className="m-1">
            <EmptyCart />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
