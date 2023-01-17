import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useGetProductQuery } from "../app/services/api";

function ImgCarousel2() {
  const { data } = useGetProductQuery();

  return (
    <>
      <div>
        <Carousel
          showArrows={true}
          showThumbs={false}
          className="flex w-screen h-96 mt-48"
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
                className="z-10 mb-48 bg-white font-open text-cyan-500 px-8 -tracking-normal py-3 rounded-sm col-start-1 row-start-1"
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
