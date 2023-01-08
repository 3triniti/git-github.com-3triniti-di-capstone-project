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
          showArrows={true}
          showThumbs={false}
          className="flex bg-bottom w-screen h-screen"
        >
          {data?.map((service) => (
            <div className="">
              <img
                className=""
                key={service.id}
                src={service.backgroundImage}
                alt={service?.serviceName}
                link
                to={service.slug}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default ImgCarousel;
