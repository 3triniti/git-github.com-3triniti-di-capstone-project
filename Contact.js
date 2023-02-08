import React from "react";
import ContactForm from "../Components/ContactForm.js";
import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="z-10 bg-contact bg-top w-screen h-3/4 bg-no-repeat font-tangerine font-normal text-7xl text-teal-500 text-center pt-72">
        Contact
      </div>
      <div className=" bg-yellow-500 h-2 w-screen mb-20"></div>
      <h1 className="font-open font-thin text-4xl text-center text-teal-400 mt-8">
        Help us get to know you
      </h1>
      <p className="font-open font-thin text-base text-black text-center mb-12 mt-4 md:ml-96 md:mr-96">
        Send us an Email directly{" "}
        <a
          href="mailto:Info@kauaiteaceremony.com?subject=Mail from Our Site, cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here"
          className="text-base font-open text-teal-500 hover:text-slate-300"
        >
          Info@kauaiteaceremony
        </a>
        or fill out the information below.
      </p>
      <ContactForm />

      <h1 className="font-open font-thin text-4xl text-center text-teal-400 mb-16">
        Thank you for letting us serve you
      </h1>
      <div className="w-screen -mb-2 h-1 bg-slate-100"></div>
      <Footer />
    </div>
  );
};

export default Contact;
