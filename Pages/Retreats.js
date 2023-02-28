import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Retreat from "../Images/retreat3.png";
import Retreat2 from "../Images/retreats.jpg";
import RetreatVideo from "../Images/retreatVid.webm";
import RetreatVideo2 from "../Images/retreatVid2.webm";

const Retreats = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-retreat2 bg-center md:w-screen md:h-96 font-tangerine font-normal text-7xl text-teal-500 text-center pt-72"></div>
        <img
          src={Retreat2}
          className="w-screen h-full md:hidden -mt-72"
          alt=""
        />
        <div className="bg-yellow-500 h-2 w-screen"></div>
        <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mb-6">
          Retreats
        </h1>
        <div>
          <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-8">
            Enjoy Zen moment in a relaxed setting of your choice
          </h1>
        </div>
        <div className="flex">
          <div className="grid-cols-1 lg:flex mt-10 mb-16">
            <video
              src={RetreatVideo}
              className="ml-1 w-screen lg:ml-12 md:ml-52 md:w-96 h-80 -mt-8 md:-mt-10 mb-6"
              controls
              autoplay="true"
              muted
            ></video>
            <h1 className="md:hidden font-open font-thin text-4xl text-center text-teal-400 ">
              Enjoy tea on beautiful Kauai
            </h1>
            <video
              src={RetreatVideo2}
              className="ml-1 lg:-ml-96 md:ml-52 w-screen md:w-96 h-80 lg:mt-72 -mt-6 mb-3 md:mb-12"
              controls
              autoplay="true"
              muted
            ></video>

            <div>
              <p className="font-open font-thin text-lg text-black text-left ml-4 md:ml-10 md:mr-12 mb-8 lg:mt-0 md:mt-8">
                Japanese tea ceremony can be a great part of a retreat. Japanese
                tea ceremony is the way of spiritual cleansing and meditation.
                Throughout the years, retreats have grown, and the use for
                retreats have varied. For the most part, Retreats are a place
                where professional and personal growth has been the focus.
                Offering Tea Ceremony in this environment would take this
                experience to another level. It could be used as a springboard,
                transitional phase, or closing ceremony. There are endless ways
                tea can be used. In an enclosed facility, in an open field, or
                on location. Either way, Tea Ceremony is great way to put all
                the guests at ease, and make them feel as important as they
                truly are. A tea ceremony could be a very important part for a
                person's spiritual breakthrough, helping them leave behind the
                past and moving forward in to the next phase of their life.
              </p>
              <p className="font-open font-thin text-lg text-black text-left ml-4 md:ml-10 md:mr-12 lg:mt-24">
                Business retreats have a similar purpose as personal retreats.
                There is a desire to have a professional breakthrough during
                business retreats. Tea ceremonies can help bring balance to an
                event and put the guests at ease. this can in turn, support the
                guests so that they can achieve a higher level of focus on what
                they are there for and ground themselves so that they can have a
                better overall experience. It is a way to bring business
                associates closer together and breakdown walls that may have
                been built, either through business ventures or personal
                experience.
              </p>
              <div className="w-full h-1 mt-9 ml-2 lg:mt-32 lg:-ml-52 bg-teal-500"></div>
              <div className="grid-cols-1"></div>
              <div className="">
                <h1 className="ml-3 md:ml-10 lg:-ml-32 mt-12 md:mt-12 lg:mt-16 text-left font-open font-thin text-4xl text-teal-400">
                  Let us serve you, and put your mind at ease
                </h1>
              </div>
              <div className="grid grid-cols-1 md:flex">
                <p className="font-open font-thin text-lg text-black text-left md:mr-12 lg:-ml-96 ml-4 md:ml-8 md:mt-16 lg:mr-0 lg:w-3/5 mt-8 mb-8">
                  Less common retreats, such as Youth and couple retreats have a
                  similar purpose, as they are for uniting and empowering the
                  people involved. The healing aspect of these events makes tea
                  ceremony an important part of the event. Youths can learn
                  another way to cope with life's problems and see themselves
                  differently. Couples can have time to be served as a couple
                  and feel that energy that initially connected them in their
                  union. It is a great way to reinforce those connections, such
                  as renewing their vows.
                </p>
                <img
                  src={Retreat}
                  className="w-screen lg:ml-12 md:ml-0.5 mr-0 lg:mr-0 md:w-1/2 lg:w-3/4 md:h-96 mt-8 ml-1 md:mt-12 lg:mt-16 mb-10 lg:mb-12"
                  alt=""
                />
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

export default Retreats;
