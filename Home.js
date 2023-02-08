import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import missionImg from "../Images/1000001568.jpg";
import Footer from "../Components/Footer";
import ImgCarousel from "../Components/ImgCarousel";
import ImgCarousel2 from "../Components/ImgCarousel2";
import MailchimpFormContainer from "../Components/mailChimp";
import HomePage from "../Images/HomePage.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />

        <ImgCarousel />
        <ImgCarousel2 />
      </div>
      <div>
        <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-8">
          Enjoy Zen moment in a relaxed setting of your choice
        </h1>
      </div>
      <div className=" grid-cols-1 md:flex pt-10 md:mb-10">
        <img
          src={missionImg}
          className=" ml-64 w-1/3 h-96 lg:w-80 md:h-96 md:ml-8"
          alt=""
        />

        <div className="">
          <p className="ml-10 mt-8  lg:ml-10 font-open font-thin lg:mr-10 lg:mt-10 text-base">
            Love is Art. Art is Love. We can express our love and respect
            through our body. Tea ceremony is a tool to express these things.
            Tea ceremony is not just a drink, it has spirit.
            <span className="pl-12 font-open text-base text-teal-600 font-thin">
              {" "}
              -Nana{" "}
            </span>
          </p>
          <p className="ml-10 mt-8 lg:pt-8 lg:ml-10 font-open font-thin lg:mr-10 text-base">
            The purpose of Kauai Tea Ceremony is to bring zen moments into life.
            Our tea Master Nana says, "unlike drinking tea at your home, your
            tea is served to you in a very graceful manner at tea ceremony. We
            hope, through this process, that people realize they are valued and
            have a part and purpose in their life, just like how they have a
            role to 'receive the tea'.
            <span className="pl-12 font-open text-base text-teal-600 font-thin">
              {" "}
              -Ayae{" "}
            </span>
          </p>
          <p className="pt-4 pl-10 font-open font-thin lg:mr-10 text-base lg:mb-20">
            The bonding rituals such as weddings and business retreats can be
            difficult to navigate. Tea Ceremony offers a relaxing setting to
            support a sometimes nerve racking activity. Tea Ceremony is meant to
            put all particants at ease, and to stay present in the moment. We
            strive to offer time and space that you will truly feel at peace
            with yourself in the beautiful nature of Kaua'i. Tea Ceremonies are
            designed to give a unique experience that will stay with you. In our
            world, we are increasingly finding it difficult to take time to just
            breath. Our Ceremonies require all participants to take notice to
            their environment and the very importance of the moment.
          </p>
          <h1 className="ml-8 font-open font-thin text-4xl text-center text-teal-400 mt-8 lg:mr-10">
            Green Tea has positive health benefits for the body
          </h1>
          <p className="pt-4 pl-10 font-open font-thin lg:mr-10 text-base">
            People have hailed the health benefits of green tea for centuries.
            Studies suggest that consuming green tea may positively affect skin
            health, help with weight loss, and reduce the risk of cardiovascular
            disease, among other benefits. Green tea is made from unoxidized
            leaves and is one of the least processed types of tea. For this
            reason, it contains the most antioxidants and beneficial
            polyphenols.
          </p>
          <p className="pt-4 pl-10 font-open font-thin lg:mr-10 text-base">
            Green tea may have a number of health benefits. For example, it may
            help weight management, skin inflammation, and type 2 diabetes. Some
            research has also linked green tea consumption to improved
            cardiovascular health. Green tea has one of the highest
            concentrations of antioxidants of any tea. It is naturally low in
            calories and contains less caffeine than black tea and coffee.
          </p>
          <p className="pt-4 pl-10 font-open font-thin lg:mr-10 text-base">
            Zen moments are times you feel peace, calm, and a state of oneness.
          </p>
          <p className="pt-4 pl-10 mb-12 lg:mb-6 font-open font-thin lg:mr-10 text-base">
            We also offer continuous connection to your zen moments through
            subscribed membership.
          </p>
          <img
            src={HomePage}
            className="w-1/3 h-96 ml-64  lg:w-64 lg:h-96 lg:-ml-64 lg:-mt-96"
            alt=""
          />
        </div>
      </div>

      <MailchimpFormContainer />

      <div>
        <div className=" md:w-screen md:-mb-2 md:h-1 bg-slate-100"></div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
