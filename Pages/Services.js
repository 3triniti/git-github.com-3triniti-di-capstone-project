import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetServiceQuery } from "../app/services/api";

function Services() {
  const { data } = useGetServiceQuery();
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <div className="">
          {data.service.map((service) => (
            <img className="" src={service.image} alt={service?.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
