import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import yukata3 from "../Images/yukata3.jpg";
import yukata from "../Images/Yukata.jpg";
import yukata2 from "../Images/yukata2.jpg";

const Workshops = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-yukata2 bg-center md:h-96 font-tangerine font-normal text-7xl text-teal-500 text-center"></div>
        <img src={yukata2} className="w-screen h-full md:hidden" alt="" />
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mt-1 mb-6">
          Yukata Rental
        </h1>
        <h1 className="font-open font-thin text-4xl text-center text-teal-400 md:mt-12 lg:ml-72 ml-3 mr-3 md:mr-0">
          Experience the ancient ritual of Yukata wearing
        </h1>
        <div className="grid-cols-1 md:flex">
          <div className="font-open font-thin text-lg text-black text-left mr-10 mb-16"></div>
          <img
            src={yukata3}
            className="w-screen h-full md:w-80 md:h-96 md:ml-0 -mt-8 md:mt-24 lg:-mt-8"
            alt=""
          />
          <div>
            <p className="font-open font-thin text-lg text-black text-left ml-4 mr-4 md:ml-10 md:mr-10 mb-6 md:mb-12 mt-12">
              Yukata literally means "bathing cloth", and it was originally
              intended to be just that. Traditionally, the garment is worn after
              bathing in a communal bath, functioning as a quick way to cover
              the body and to absorb remaining moisture. Fittingly, the yukata
              is often worn in hot spring (onsen) towns. The yukata is made from
              light, breezy, absorbent material like thin cotton or breathable
              synthetic material. It can be as basic or as extravagant as you
              like and these days it's most often worn during summer events like
              hanabi (fireworks) festivals, and in the worldly popular Bon dance
              festivals.
            </p>
            <p className="font-open font-thin text-lg text-black text-left ml-4 mr-4 md:ml-10 md:mr-10 mb-6 md:mb-12">
              When we wear kimono or yukata, we fasten with obi(belt) tightly.
              it helps stretch our spine and it is difficult to take a biased
              stance. We can train our abs, spine and inner muscle naturally as
              a result. This preventive of bisceroptosis. This is wisdom of life
              that handed down from ancient time. Wearing kimono or yukata is
              not hard or painful for your body. We tighten obi( belt ) not on
              your stomach, but on waist. If we can tighten on correct position,
              it stabilizes your waist. Wearing kimono or yukata make our feel
              tense and we can experience how people used to live in Japan.
            </p>
            <p className="font-open font-thin text-lg text-black text-left ml-4 mr-4 md:ml-10 md:mr-8 mb-6 md:mb-12">
              We offer rental service so that you can enjoy our yukata and
              stroll through town, as people did in our past. You can experience
              a little of ancient Japanese time.
            </p>
            <p className="font-open font-thin text-lg text-left ml-4 mr-4 md:ml-10 md:mr-8 mb-6 md:mb-16">
              As part of the service, we will assist dressing you in the yukata
              (if needed), to ensure that it is worn properly.
            </p>
            <img
              src={yukata}
              className="w-screen h-full md:w-72 md:h-96 md:-ml-72 md:-mt-96 lg:-mt-72 mb-8"
              alt=""
            />
            <div className="bg-teal-500 h-1.5 w-5/6 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
          </div>
        </div>
      </div>
      <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
      <Footer />
    </div>
  );
};

export default Workshops;
