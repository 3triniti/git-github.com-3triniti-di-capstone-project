import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SpecialEventsImg from "../Images/specialEvents.jpg";

const SpecialEvents = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-service2 bg-center w-screen h-96 bg-no-repeat"></div>
        <div className=" bg-yellow-500 h-2 w-screen"></div>
        <div>
          <div className="flex pt-16 mb-16">
            <img src={SpecialEventsImg} className=" w-80 h-96 pl-8" alt="" />
            <p className="font-open font-thin text-base text-black text-left ml-10 mr-8 mb-16">
              Tea ceremony is used as a purification ritual for the mind and
              spirit, before a wedding, going to war, or important milestones in
              life. We also offer ceremonies for more modern affairs, such as,
              business meetings, birthday parties, retreats,and special
              announcements. We offer ceremonies for these and other special
              occasions.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SpecialEvents;
