import React from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo2 from "../Images/Kauai Tea Ceremony logo (12).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="columns-1 md:flex bg-slate-100 w-screen md:h-full lg:h-64 md:mt-2">
        <div>
          <Link to="/" className=" hover:shadow-slate-200">
            <img
              src={logo2}
              className="ml-8 h-80 w-80 md:h-64 md:w-64 md:ml-0 drop-shadow-lg hover:opacity-50"
              alt=""
            />
          </Link>
        </div>
        <div className="ml-8 columns-2 gap-5 lg:ml-10 flex-wrap md:columns-2 md:pl-24 mt-4 md:mb-3 mr-3">
          <div className="pb-1 md:pb-2.5">
            <Link
              to="/"
              className="text-teal-600 hover:text-teal-800 font-open text-xs"
            >
              HOME
            </Link>
          </div>
          <div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/special-events"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                SPECIAL EVENTS
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/weddings"
                className=" text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                WEDDINGS
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/retreats"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                RETREATS
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/community-outreach"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                COMMUNITY OUTREACH
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/workshops"
                className=" text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                WORKSHOPS
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/yukata-rental"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                YUKATA RENTAL
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/cups-and-plates"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                CUPS AND PLATES
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/pots-and-bowls"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                POTS AND BOWLS
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/tea"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                TEA
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/place-mats"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                PLACE MATS
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/history"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                HISTORY
              </Link>
            </div>
            <div className="pb-1 md:pb-2.5">
              <Link
                to="/creators"
                className="text-teal-600 hover:text-teal-800 font-open text-xs"
              >
                CREATORS
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden ml-8 w-80 h-0.5 mt-3 mb-6 bg-white"></div>
        <div className="ml-0 h-0 w-0 lg:h-48 lg:w-0.5 lg:mt-8 lg:ml-12 bg-white"></div>
        <div className="columns-4 gap-2 md:flex ml-7 md:ml-24">
          <Container className="md:w-10 md:h-10 md:mt-10">
            <div>
              <a href="http://facebook.com">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-7 h-7 mb-6 md:mb-0 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
            <div>
              <a href="http://instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-7 h-7 md:mt-3 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
            <div>
              <a href="http://twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-7 h-7 md:mt-3 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
            <div>
              <a href="http://youtube.com">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-7 h-7 md:mt-3 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
          </Container>
        </div>
        <div className="h-0 w-0 ml-0 lg:h-48 lg:w-0.5 lg:mt-8 lg:ml-28 bg-white"></div>
        <div className="columns-2 md:columns-1">
          <div className="ml-16 md:ml-8 lg:ml-20 md:mt-8 md:mb-6">
            <Link
              to="/contact"
              className="text-teal-600 hover:text-slate-300 font-open text-xs text-center ml-2 mt-8 md:mt-0 lg:mt-10 md:pb-10"
            >
              CONTACT US
            </Link>
          </div>
          <div>
            <a href="mailto:Info@kauaiteaceremony.com?subject=Mail from Our Site, cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-7 h-7 text-teal-500 hover:text-slate-300 font-open text-sm ml-20 md:mt-0 mt-3 md:ml-16 lg:ml-28 md:mb-0 mb-8"
              />
            </a>
          </div>
          <div className=" ml-6 lg:mt-8 md:mt-4 md:mb-0 mb-12 pb-4 md:pb-0">
            <a href="https://dev-island.org/">
              <icon className="font-open text-lg md:ml-10 md:mb-0 text-cyan-500 hover:text-opacity-70">
                dev-
                <span className="text-violet-900 hover:text-opacity-70 text-lg font-open">
                  island.org
                </span>
              </icon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
