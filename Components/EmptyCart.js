import React from "react";
import { useSelector } from "react-redux";
import cartIcon from "../Images/empty-cart.png";

const EmptyCart = ({ onClick }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <button onClick={onClick} className="empty-cart-image ml-8 lg:mr-6 lg:ml-3">
      <img src={cartIcon} className=" w-6 ml-0 hover:opacity-30" alt="" />
      {cart > 0 && (
        <div className="flex justify-center items-center text-xs h-5 w-5 absolute -top-2.5 -right-2.5 bg-accent text-white rounded-full">
          {cart}
        </div>
      )}
    </button>
  );
};

export default EmptyCart;
