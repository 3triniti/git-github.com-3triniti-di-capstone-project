import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useGetServiceQuery } from "../app/services/api";

// import SpecialEvents from "../Pages/SpecialEvents";
// import { useNavigate } from "react-router-dom";

function ImgCarousel() {
  const { data } = useGetServiceQuery();

  // const navigate = useNavigate();

  console.log({ data });

  return (
    <>
      <div>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={5000}
          speed={1000}
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          className="carousel slide carousel-fade bg-bottom w-screen text-xl"
        >
          {data?.map((service) => (
            <div className="grid grid-cols-1 grid-rows-1 place-items-center">
              <img
                className="z-0 blur-0 col-start-1 row-start-1"
                key={service.id}
                src={service.backgroundImage}
                alt={service?.serviceName}
              />
              <div className="mt-12 md:mt-36 text-teal-500 backdrop-blur-0 font-tangerine text-5xl col-start-1 row-start-1 ">
                {service.haiku.map((h) => (
                  <p>{h}</p>
                ))}
              </div>
              <a
                className="z-10 mt-28 md:mt-72 bg-white opacity-70 hover:bg-white hover:text-slate-500 font-open text-teal-500 text-lg px-4 md:px-8 tracking-normal py-1.5 md:py-3 rounded-sm col-start-1 row-start-1"
                href={`/${service.slug}`}
              >
                {service.serviceName}
              </a>
            </div>
          ))}
        </Carousel>
      </div>
      <div className=" bg-yellow-500 h-2 w-screen"></div>
    </>
  );
}

export default ImgCarousel;
