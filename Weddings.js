import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import wedding2 from "../Images/wedding2.jpg";
import weddingVideo from "../Images/weddingVideo.mov";

const Weddings = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="z-10 bg-wedding8 bg-center md:ml-0 md:w-screen md:h-96 bg-no-repeat font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Weddings
        </div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div>
          <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-8">
            Let us bring a deeper meaning to your bonding moment
          </h1>
        </div>
        <div className="font-sans text-xl text-black text-left mr-10 mb-8 pt-4">
          <div className="grid-cols-1 md:flex pt-4 mb-8">
            <img
              src={wedding2}
              className="w-80 h-96 ml-36 md:ml-12 mt-4"
              alt=""
            />

            <div>
              <p className="font-open font-thin text-lg text-black text-left ml-12 md:ml-12 mr-10 md:mr-12 mb-8 mt-12">
                People used to use tea ceremony to cleanse their mind and
                spirit. We offer tea ceremony as Japanese traditional ceremony
                “san-san-kudo, “Which is bride and groom exchange three cup of
                sake( but we use tea for that). Three cups of tea represents
                their past/ ancestors, present, and future. We also offer
                Japanese origami workshop for families and friends that they can
                make some origami gift for new married couple.
              </p>
              <p className="font-open font-thin text-lg text-black text-left ml-12 md:ml-12 mr-10 md:mr-12 mb-10 md:mb-3">
                Tea is of high significance in Japanese weddings. Japanese tea
                ceremonies also known as “Chanoyu”(powdered tea), much like the
                Chinese in conception, are more quiet and serene. They are meant
                to symbolize harmony, purity and respect between both parties.
                It is the Way of Tea. The guests sit in revered silence while
                the hosts prepare the sacred tea and delicately discuss the tea
                and its preparation while they sip it.
              </p>
              <div className=" w-full h-1 ml-4 md:mt-28 md:-ml-32 bg-teal-500"></div>
              <h1 className="font-open font-thin text-4xl text-center text-teal-400 ml-8 md:-ml-60  mt-8">
                Marriage is an ancient custom, as is tea ceremony
              </h1>
              <div>
                <video
                  src={weddingVideo}
                  className=" ml-40 md:ml-96 w-60 h-72 mt-10 md:mt-16 md:mb-24"
                  controls="control"
                  autoplay="true"
                  muted
                ></video>

                <p className="font-open font-thin text-lg text-black text-left ml-12 md:-ml-24 md:mr-80 mt-8 md:-mt-96 mb-8 md:pr-64">
                  Tea has been part of wedding ceremonies around the world for
                  over a hundred years, and it’s the simple, yet sophisticated
                  drink that people of any country or social status can afford
                  and enjoy. Through the years it has symbolized love, peace,
                  respect, understanding, truce and unity. It has been used as a
                  way to seal-the-deal, both for marital and business
                  engagements. Every place, every culture and every family uses
                  tea differently, and it means something new to each person who
                  uses it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default Weddings;
