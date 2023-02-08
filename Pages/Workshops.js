import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import workshop2 from "../Images/workshop2.jpg";
import weddingVideo2 from "../Images/weddingVideo3.mov";
import workshop from "../Images/workshop.jpg";

const Workshops = () => {
  return (
    <div>
      <Navbar />
      <div>
        <video
          src={weddingVideo2}
          className=" w-screen"
          controls="control"
          autoplay="true"
          muted
        ></video>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-open font-thin text-4xl text-center text-teal-400 ml-8 mr-8 mt-8">
          Learn ways to articulate the delicate relationship between nature and
          yourself
        </h1>
        <div className="grid grid-cols-1 md:flex mb-16">
          <img
            src={workshop2}
            className=" w-80 h-96 ml-44 md:ml-8 mt-16"
            alt=""
          />
          <div>
            <p className="font-open font-thin text-lg text-black text-left ml-12 mr-12 mt-12">
              Chanoyu (the Tea Ceremony) is a multifaceted art form developed in
              Japan over 800 years, an expression of hospitality, a school of
              movement and manners, and a compendium of the Japanese arts –
              garden architecture, carpentry and woodworking, painting and
              calligraphy, flower arrangement of a certain kind, pottery,
              cultivation and preparation of leaf tea (Sencha), tea sweets,
              seasonal procedures and much more.
            </p>{" "}
            <p className="font-open font-thin text-lg text-black text-left ml-12 mr-12 mb-8 mt-4">
              ​Kauai Tea Ceremony will periodically schedule workshops and
              classes to promote and teach Japanese cultural elements through
              tea ceremony. Classes will be structured to give students the
              understanding of their contributions to the art and spirit of the
              Japanese tea ceremony. These classes and workshops will take place
              at designated locations on island. We are flexible with our
              locations, and are open to sponsored events.
            </p>
          </div>
          <img
            src={workshop}
            className=" w-80 h-96 mt-6 ml-44 md:ml-0  md:mt-16 md:mr-10"
            alt=""
          />
        </div>
      </div>
      <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
      <Footer />
    </div>
  );
};

export default Workshops;
