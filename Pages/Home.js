import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import missionImg from "../Images/1000001568.jpg";
import Footer from "../Components/Footer";

import ImgCarousel from "../Components/ImgCarousel";
import ImgCarousel2 from "../Components/ImgCarousel2";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />
        <div>
          <ImgCarousel />
        </div>
        <div className=" bg-yellow-500 h-2 w-screen -mt-28"></div>
        <ImgCarousel2 />
      </div>
      <div className="flex pt-16 mb-10">
        <img src={missionImg} className=" w-80 h-96 pl-8" alt="" />
        <div>
          <p className="pl-10 font-open font-thin pr-10 text-base">
            Love is Art. Art is Love. We can express our love and respect
            through our body. Tea ceremony is a tool to express these things.
            Tea ceremony is not just a drink, it has spirit.
            <span className="pl-12 font-open text-base text-cyan-600 font-thin">
              {" "}
              -Nana{" "}
            </span>
          </p>
          <p className="pt-8 pl-10 font-open font-thin pr-10 text-base">
            The purpose of Suehiro is to bring zen moments into life. Our tea
            Master Nana says, "unlike drinking tea at your home, your tea is
            served to you in a very graceful manner at tea ceremony. We hope,
            through this process, that people realize they are valued and have a
            part and purpose in their life, just like how they have a role to
            'receive the tea'.
            <span className="pl-12 font-open text-base text-cyan-600 font-thin">
              {" "}
              -Ayae{" "}
            </span>
          </p>
          <p className="pt-4 pl-10 font-open font-thin pr-10 text-base">
            We also offer continuous connection to your zen moments through
            subscribed membership.
          </p>
          <p className="pt-4 pl-10 font-open font-thin pr-10 text-base">
            Zen moments are times you feel peace, calm, and a state of oneness.
          </p>
          <p className="pt-4 pl-10 font-open font-thin pr-10 text-base">
            We strive to offer time and space that you will truly feel at peace
            with yourself in the beautiful nature of Kaua'i.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
