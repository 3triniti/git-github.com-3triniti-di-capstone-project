import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Retreat from "../Images/retreat3.png";
import RetreatVideo from "../Images/retreatVid.webm";
import RetreatVideo2 from "../Images/retreatVid2.webm";

const Retreats = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-retreat2 bg-center h-96 font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
          Retreats
        </div>
        <div className="bg-yellow-500 h-2 w-screen"></div>
        <div>
          <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-8">
            Enjoy Zen moment in a relaxed setting of your choice
          </h1>
        </div>
        <div className="flex">
          <div className="grid-cols-1 md:flex mt-10 mb-16">
            <video
              src={RetreatVideo}
              className="ml-2 w-screen md:ml-12 md:w-96 h-80 md:-mt-10 mb-6"
              controls
              autoplay="true"
              muted
            ></video>

            <video
              src={RetreatVideo2}
              className="ml-2 md:-ml-96 w-screen md:w-96 h-80 md:mt-72 mt-6 mb-12"
              controls
              autoplay="true"
              muted
            ></video>

            <div>
              <p className="font-open font-thin text-lg text-black text-left ml-10 mr-12 mb-8">
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
              <p className="font-open font-thin text-lg text-black text-left ml-10 mr-12 md:mt-24">
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
              <div className=" w-full h-1 mt-9 ml-3 md:mt-32 md:-ml-52 bg-teal-500"></div>
              <div className="">
                <img
                  src={Retreat}
                  className="md:ml-96 md:w-1/2 md:h-72 mt-12 ml-2 md:mt-24 mb-10"
                  alt=""
                />
              </div>
              <div>
                <h1 className="ml-8 md:-ml-96 md:-mt-80 text-left font-open font-thin text-4xl text-teal-400">
                  Let us serve you, and put your mind at ease
                  <p className="font-open font-thin text-lg text-black text-left md:mr-80 mt-12 mb-8 md:pr-48">
                    Less common retreats, such as Youth and couple retreats have
                    a similar purpose, as they are for uniting and empowering
                    the people involved. The healing aspect of these events
                    makes tea ceremony an important part of the event. Youths
                    can learn another way to cope with life's problems and see
                    themselves differently. Couples can have time to be served
                    as a couple and feel that energy that initially connected
                    them in their union. It is a great way to reinforce those
                    connections, such as renewing their vows.
                  </p>
                </h1>
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

export default Retreats;
