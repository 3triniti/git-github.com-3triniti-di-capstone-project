import React from "react";
import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar";
import profile2 from "../Images/suehirocreator1.jpeg";
import profile1 from "../Images/1000001726.jpg";
import creators from "../Images/creators.jpg";
import creators2 from "../Images/creators2.jpg";

const Creators = () => {
  return (
    <>
      <Navbar />
      <div className="bg-yellow-500 w-screen h-2"></div>
      <div className="columns-1 md:grid grid-cols-2">
        <div className="z-20 columns-1 mt-10 p-5 gap-5">
          <div className="columns-1 md:flex gap-4 md:mr-8">
            <img
              src={profile1}
              className="w-screen h-80  md:w-64 md:h-72 md:ml-2 drop-shadow-xl rounded-md"
              alt=""
            ></img>
            <div className="columns-1 md:flex flex-col gap-2">
              <h2 className="text-base font-open font-normal md:mr-0  md:ml-8 md:w-96 mt-8">
                Nana Williams - Co-Creator / Tea Guide
              </h2>
              <p className="font-open font-normal text-sm tracking-wider md:ml-8 md:mr-8 mt-3 md:w-96">
                Nana grew up in Kyoto Japan, where it is called “Treasury of
                Japanese culture” She learned Japanese traditional tea ceremony
                from Master Issui Sasaki who is originator of “ Issui senchado
                一穂流煎茶道” She was taught how important hospitality and mind
                of zen are through tea ceremony. And she wants to share this to
                people outside of Japan as her master entrusted her.
              </p>
            </div>
            <img
              src={creators}
              className="w-screen md:w-72 md:h-44 lg:w-96 lg:h-72 mt-12 md:mt-48 lg:ml-0 md:ml-0 drop-shadow-xl rounded-md"
              alt=""
            ></img>
          </div>
          <div className="columns-1 md:flex gap-4">
            <img
              src={profile2}
              className="w-screen md:w-80 md:h-96 mb-6 md:mb-0 md:ml-2 lg:-mt-24 mt-14 drop-shadow-xl rounded-md"
              alt=""
            ></img>
            <div className="columns-1 md:flex flex-col gap-2">
              <h2 className="ml-0 md:ml-8 md:-mt-16 text-base font-open font-normal">
                Ayae Tueller - Co-Creator / Ceremony Artist
              </h2>
              <p className="md:ml-8 md:w-96 lg:mt-0 md:mt-48 mt-3 md:mr-8 font-normal text-sm font-open tracking-wider">
                Ever since Ayae was little, she had a passion for tea. Growing
                up in Japan, drinking Japanese tea was a daily routine after a
                meal/snack. When she was twenty, she decided to quit drinking
                caffeinated drinks, including Japanese tea. However, that did
                not stop her from drinking tea! She has fallown love with herbal
                teas that nourish people's bodies and souls. She always has
                various herbal teas in her cupboard and has been serving to
                friends and families for many years. She has attended multiple
                health classes to deepen her understanding of herbs and their
                nutrition values, which have been blessing her family and those
                who come into her life{" "}
              </p>
            </div>
            <img
              src={creators2}
              className="lg:w-4/6 lg:h-11/12 md:mt-32 mt-6 lg:ml-0 md:-ml-8 drop-shadow-xl rounded-md"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="bg-teal-500 h-1.5 w-1/2 ml-24 -mt-14 mb-24"></div>
      <div className="md:hidden bg-teal-500 h-1.5 w-5/6 mt-10 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
      <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
      <Footer />
    </>
  );
};

export default Creators;
