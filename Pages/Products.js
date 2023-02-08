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
        </div>
      </div>
    </>
  );
}

export default Products;
