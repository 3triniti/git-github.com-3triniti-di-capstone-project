import React from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import missionImg from "../Images/1000001568.jpg";
import Footer from "../Components/Footer";

import ImgCarousel from "../Components/Footer";

const Home = () => {
  // const navigate = useNavigate();
  // const { serviceName, productName } = useParams();
  return (
    <>
      <div>
        <Navbar />
        <div>
          <ImgCarousel />
        </div>
        {/* <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div className="bg-product1 bg-cover bg-center  bg-no-repeat w-screen h-80">
          <div className="font-tangerine text-white drop-shadow-2xl text-6xl text-center pt-36">
            Cups and Plates
          </div>
          {productName} */}
        {/* <button
            onClick={() => {
              navigate("/:productName");
            }}
            className="bg-red-500 text-white font-sans text-sm h-10 w-32 mt-3 ml-96"
          >
            SEE PRODUCTS
          </button> */}
        {/* </div>
        <div className="flex pt-16 mb-10">
          <img src={missionImg} className=" w-2/5 h-1/2 pl-8" alt="" />
          <div>
            <p className="pl-10 font-sans pr-10 text-lg">
              Love is Art, Art is Love. We can express our love and respect
              through our body. Tea ceremony is a tool to express these things.
              Tea ceremony is not just a drink, it has spirit.
              <span className="pl-12 font-sans text-lg font-semibold">
                {" "}
                -Nana{" "}
              </span> */}
        {/* </p>
            <p className="pt-8 pl-10 font-sans pr-10 text-lg">
              The purpose of Suehiro is to bring zen moments into life. Our tea
              Master Nana says, "unlike drinking tea at your home, your tea is
              served to you in a very graceful manner at tea ceremony. We hope,
              through this process, that people realize they are valued and have
              a part and purpose in their life, just like how they have a role
              to 'receive the tea'.
              <span className="pl-12 font-sans text-lg font-semibold">
                {" "}
                -Ayae{" "}
              </span>
            </p> */}
        {/* <p className="pt-4 pl-10 font-sans pr-10 text-lg">
              We also offer continuous connection to your zen moments through
              subscribed membership.
            </p>
            <p className="pt-4 pl-10 font-sans pr-10 text-lg">
              Zen moments are times you feel peace, calm, and a state of
              oneness.
            </p>
            <p className="pt-4 pl-10 font-sans pr-10 text-lg">
              We strive to offer time and space that you will truly feel at
              peace with yourself in the beautiful nature of Kaua'i.
            </p> */}
        {/* </div>
        </div> */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
