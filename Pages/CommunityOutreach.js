import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import suehiroKids from "../Images/suehirokids1.jpg";
import CommunityOutreach2 from "../Images/communityOutreach2.jpg";
import community from "../Images/Communityhands.jpg";

const CommunityOutreach = () => {
  return (
    <div>
      <Navbar />
      <div className="z-10 bg-communityOutreach bg-center w-screen md:h-96 bg-no-repeat font-tangerine font-normal text-7xl text-teal-500 text-center"></div>
      <img src={community} className="w-screen h-full md:hidden" alt="" />
      <div className=" bg-yellow-500 h-2 w-screen"></div>
      <h1 className="font-tangerine font-normal text-7xl text-teal-500 text-center mt-1 mb-6">
        Community Outreach
      </h1>
      <div>
        <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-8 ml-3 mr-3">
          Let us assist in the healing process with a show of gratitude
        </h1>
      </div>
      <div className="w-screen md:w-1/2 lg:w-4/6 h-1 lg:mr-0 mt-8 md:mt-12 md:ml-52 lg:ml-96 bg-teal-500"></div>
      <div className="grid-cols-1 lg:flex pt-10 mb-12">
        <img
          src={suehiroKids}
          className="w-screen h-full md:w-80 md:h-96 mb:12 md:mb-0 lg:ml-12 md:ml-64 md:-mt-8"
          alt=""
        />

        <div>
          <p className="font-open font-thin text-base text-black text-left ml-6 md:ml-12 mr-6 md:mr-10 mb-6 md:mb-6 mt-4">
            Community Outreach means an activity of providing services to any
            populations who might not otherwise have access to those services.
            In addition to delivering services, outreach has an educational
            role, raising the awareness of existing services.
          </p>
          <p className="font-open font-thin text-base text-black text-left ml-6 md:ml-12 mr-6 md:mr-10 mb-10 lg:mb-24">
            To get involved in community outreach, you first have to have a
            passion for your community. The creators of Kauai Tea Ceremony both
            have love and passion for their Kauaian community. The idea and goal
            for Kauai Tea Ceremony is to reach out to the Community and give an
            experience that wouldn't normally be given. Especially in the
            transition parts of our lives. As we transition to the golden years,
            or a pivotal moment in life. Many times, as people get older, there
            is a feeling of loss. Tea ceremony can help put an elderly person
            back in touch with their connections that they believe has been
            lost. Tea ceremony is a way to say,"Thank you" to an elderly person
            for their rich and long lives. In a world where very often the
            elderly are forgotten, tea ceremony allows them to remember that
            they are loved and appreciated.
          </p>
          <div className="w-5/6 ml-8 md:w-4/6 h-1 mt-8  md:ml-32 lg:mt-12 lg:ml-10 bg-teal-500"></div>
          <p className="font-open font-thin text-base text-black text-left ml-6 md:ml-12 lg:ml-36 mr-6 md:mr-10 lg:mt-20 mt-10 mb-6">
            One very important aspect of our Community is our youth. Kauai Tea
            Ceremony plans to collaborate with organizations like the YWCA, Boys
            and Girls clubs, and health specialists to ensure that all youths
            struggling with mental health, or youth who could benefit from
            receiving or learning the benefits of tea ceremony. We can serve one
            youth or a group of youths. Its not a matter of how many when it
            comes to need. The empowering experience of tea ceremony will help
            youths find their inner voice and give them the power to take next
            steps in life. We can also offer this service for a whole families
            struggling with obstacles. It is important that we advocate for a
            healthier community. Kauai Tea Ceremony would like to be a part of
            that change and growth.{" "}
          </p>
          <p className="font-open font-thin text-base text-black text-left ml-6 md:ml-12 lg:ml-36 mr-6 md:mr-10 mb-6 lg:mb-20">
            Houselessness is a big problem throughout the world. Kauai has a
            very high houselessness rate. It is a goal of ours to serve the
            houseless people of our community. We would like to work hand and
            hand with local agencies to give houseless people the experience of
            being served and feeling special. Life can present a series of
            misfortunes. It is important to give the feelings of fortune again.
            Tea ceremony can be the boast a person needs to turn things around
            in their mind and heart.
          </p>
          <div>
            <img
              src={CommunityOutreach2}
              className=" md:w-96 md:h-72 md:ml-52 lg:-ml-72 lg:-mt-96 md:mb-16"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:hidden bg-teal-500 h-1.5 w-5/6 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
      <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
      <Footer />
    </div>
  );
};

export default CommunityOutreach;
