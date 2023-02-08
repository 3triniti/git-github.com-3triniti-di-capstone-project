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
      <div className="flex mt-8 md:flex bg-slate-100 w-screen lg:h-64 lg:mt-2">
        <Link to="/" className=" hover:shadow-slate-200">
          <img
            src={logo2}
            className="h-60 w-60 md:ml-0 md:w-64 md:h-64 drop-shadow-lg hover:opacity-50"
            alt=""
          />
        </Link>
        <div className="ml-5 columns-3  lg:ml-10 flex-wrap md:columns-2 md:pl-24 w-1/3 mt-4 mb-3">
          <div className="pb-2.5">
            <Link
              to="/"
              className="text-teal-600 hover:text-white font-open text-xs"
            >
              HOME
            </Link>
          </div>
          <div>
            <div className="pb-2.5">
              <Link
                to="/special-events"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                SPECIAL EVENTS
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/weddings"
                className=" text-teal-600 hover:text-white font-open text-xs"
              >
                WEDDINGS
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/retreats"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                RETREATS
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/community-outreach"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                COMMUNITY OUTREACH
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/workshops"
                className=" text-teal-600 hover:text-white font-open text-xs"
              >
                WORKSHOPS
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/yukata-rental"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                YUKATA RENTAL
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/cups-and-plates"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                CUPS AND PLATES
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/pots-and-bowls"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                POTS AND BOWLS
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/tea"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                TEA
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/place-mats"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                PLACE MATS
              </Link>
            </div>
            <div className="pb-2.5">
              <Link
                to="/history"
                className="text-teal-600 hover:text-white font-open text-xs"
              >
                HISTORY
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-0 h-48 w-0.5 mt-8 md:ml-12 bg-white"></div>
        <div className="ml-7 md:ml-24">
          <Container className="w-10 h-10 mt-10">
            <div>
              <a href="http://facebook.com">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-7 h-7 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
            <div>
              <a href="http://instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-7 h-7 mt-3 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
            <div>
              <a href="http://twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-7 h-7 mt-3 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
            <div>
              <a href="http://youtube.com">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-7 h-7 mt-3 text-teal-500 hover:text-slate-300"
                />
              </a>
            </div>
          </Container>
        </div>

        <div className="ml-10 h-48 w-0.5 mt-8 md:ml-28 bg-white"></div>
        <div>
          <div className="ml-7 md:ml-28 mt-10 pb-16">
            <Link
              to="/contact"
              className="text-teal-600 hover:text-slate-300 font-open text-xs text-center mt-10 pb-10"
            >
              CONTACT US
            </Link>
          </div>
          <div>
            <a href="Info@kauaiteaceremony">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-7 h-7 text-teal-500 hover:text-slate-300 font-open text-sm ml-12 md:ml-32"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
