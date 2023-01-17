import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../app/services/api";

function Products() {
  const { data } = useGetProductQuery();
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <div className="">
          {data.product.map((product) => (
            <img className="" src={product.image} alt={product?.name} />
          ))}
          <button
            onClick={() => {
              navigate("/:ProductName");
            }}
            className="bg-red-500 text-white font-sans text-sm h-10 w-32 mt-2 ml-96"
          >
            READ MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
