import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import wedding8 from "../Images/weddings.jpg";
import wedding2 from "../Images/wedding2.jpg";
import weddingVideo from "../Images/weddingVideo.mov";

const Weddings = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="z-10 bg-wedding8 bg-center w-screen ml:12 md:ml-0 md:h-96 bg-no-repeat font-tangerine font-normal text-7xl text-teal-500 text-center"></div>
        <img src={wedding8} className="w-screen h-full md:hidden" alt="" />
        <div className="bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mt-1 mb-6">
          Weddings
        </h1>
        <div>
          <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-8">
            Let us bring a deeper meaning to your bonding moment
          </h1>
        </div>
        <div className="font-sans text-xl text-black text-left mr-6 mb-8 pt-4">
          <div className="grid-cols-1 md:flex pt-4 mb-8">
            <img
              src={wedding2}
              className="w-screen h-full ml-3 md:w-80 md:h-96 mt-4 lg:ml-8"
              alt=""
            />

            <div>
              <p className="font-open font-thin text-lg text-black text-left ml-8 md:ml-12 md:mr-12 mb-12 mt-16">
                People used to use tea ceremony to cleanse their mind and
                spirit. We offer tea ceremony as Japanese traditional ceremony
                “san-san-kudo, “Which is bride and groom exchange three cup of
                sake( but we use tea for that). Three cups of tea represents
                their past/ ancestors, present, and future. We also offer
                Japanese origami workshop for families and friends that they can
                make some origami gift for new married couple.
              </p>
              <p className="font-open font-thin text-lg text-black text-left ml-8 md:ml-12 md:mr-12 mb-12 md:mb-12">
                Tea ceremonies are quiet and serene. They are meant to symbolize
                harmony, purity and respect between both parties. It is the Way
                of Tea. The guests sit in revered silence while the hosts
                prepare the sacred tea and delicately discuss the tea and its
                preparation while they sip it.
              </p>
              <div className=" w-full h-1 md:mt-28 bg-teal-500 ml-4 md:-ml-36"></div>
              <div className="md:-ml-72">
                <h1 className="font-open font-thin text-4xl text-center text-teal-400 ml-8 lg:ml-0 mt-8 lg:mt-16">
                  Marriage is an ancient custom, as is tea ceremony
                </h1>
                <div className="columns-1 md:columns-1 lg:flex">
                  <p className="font-open font-thin text-lg text-black text-left ml-8 mt-8 lg:mt-20 mb-8 lg:ml-52 lg:mr-8">
                    Tea has been part of wedding ceremonies around the world for
                    over a hundred years, and it’s the simple, yet sophisticated
                    drink that people of any country or social status can afford
                    and enjoy. Through the years it has symbolized love, peace,
                    respect, understanding, truce and unity. It has been used as
                    a way to seal-the-deal, both for marital and business
                    engagements. Every place, every culture and every family
                    uses tea differently, and it means something new to each
                    person who uses it.
                  </p>
                  <video
                    src={weddingVideo}
                    className="w-screen ml-3 md:w-72 h-72 mt-10 lg:mr-52"
                    controls="control"
                    autoplay="true"
                    muted
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden bg-teal-500 h-1.5 w-5/6 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
        <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default Weddings;
