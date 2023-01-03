import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import { useGetServiceQuery } from "./Images";
import { useParams } from "react-router-dom";
// import SpecialEvents from "../Pages/SpecialEvents";
// import { useNavigate } from "react-router-dom";

function ImgCarousel() {
  const [service, setService] = useState();
  const { data } = useGetServiceQuery();
  const { serviceName } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    setService(data?.find((service) => service.slug === serviceName));
  }, [data, serviceName]);

  return (
    <>
      <div>
        <Carousel
          showArrows={true}
          showThumbs={true}
          className="flex w-screen h-96"
        >
          <div>
            {service.backgroundimage.map((service) => (
              <img
                key={service}
                src={service.backgroundimage}
                alt={service?.name}
              />
            ))}
          </div>

          {/* <div className="bg-service1 ease-in-out bg-center w-screen h-96 bg-no-repeat">
            <div className="font-tangerine text-white drop-shadow-2xl text-6xl text-center pt-48">
              Special Events
            </div>
            {SpecialEvents}
            <button
              onClick={() => {
                navigate("/:SpecialEvents");
              }}
              className="bg-red-500 text-white font-sans text-sm h-10 w-32 mt-2 ml-96"
            >
              READ MORE
            </button>
          </div>
          <div className="bg-service2 ease-in-out bg-center w-screen h-96 bg-no-repeat">
            <div className="font-tangerine text-white drop-shadow-2xl text-6xl text-center pt-48">
              Special Events
            </div>
            {SpecialEvents}
            <button
              onClick={() => {
                navigate("/:SpecialEvents");
              }}
              className="bg-red-500 text-white font-sans text-sm h-10 w-32 mt-2 ml-96"
            >
              READ MORE
            </button>
          </div>
          <div className="bg-service3 ease-in-out bg-center w-screen h-96 bg-no-repeat">
            <div className="font-tangerine text-white drop-shadow-2xl text-6xl text-center pt-48">
              Special Events
            </div>
            {SpecialEvents}
            <button
              onClick={() => {
                navigate("/:SpecialEvents");
              }}
              className="bg-red-500 text-white font-sans text-sm h-10 w-32 mt-2 ml-96"
            >
              READ MORE
            </button>
          </div>
          <div className="bg-service4 ease-in-out bg-center w-screen h-96 bg-no-repeat">
            <div className="font-tangerine text-white drop-shadow-2xl text-6xl text-center pt-48">
              Special Events
            </div>
            {SpecialEvents}
            <button
              onClick={() => {
                navigate("/:SpecialEvents");
              }}
              className="bg-red-500 text-white font-sans text-sm h-10 w-32 mt-2 ml-96"
            >
              READ MORE
            </button>
          </div> */}
        </Carousel>
      </div>
    </>
  );
}

export default ImgCarousel;
