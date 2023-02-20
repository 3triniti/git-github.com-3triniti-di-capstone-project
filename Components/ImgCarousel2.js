import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useGetProductQuery } from "../app/services/api";

function ImgCarousel2() {
  const { data } = useGetProductQuery();

  return (
    <>
      <div className=" bg-yellow-500 h-2 w-screen md:mt-10"></div>
      <div>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={15000}
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          className="md:relative md:w-screen lg:flex lg:h-96"
        >
          {data?.map((product) => (
            <div className="grid grid-cols-1 grid-rows-1 place-items-center">
              <img
                className="z-0 blur-0 col-start-1 row-start-1"
                key={product.id}
                src={product.backgroundImage}
                alt={product?.productName}
              />
              <a
                className="z-10 md:mb-1 lg:mb-48 bg-white opacity-70 hover:bg-slate-200 hover:text-slate-500 font-open text-teal-500 px-4 md:px-8 -tracking-normal py-1.5 md:py-3 rounded-sm col-start-1 row-start-1"
                href={`/${product.slug}`}
              >
                {product.productName}
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default ImgCarousel2;
