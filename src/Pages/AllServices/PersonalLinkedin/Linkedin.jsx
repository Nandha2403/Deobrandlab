import React from "react";
import Navbar from "../../../Components/Navabar/Navbar";
import "./Linkedin.css";
import Footer from "../../../Components/Footer/Footer";

const Linkedin = () => {
  return (
    <div className="Linkedin_parent">
      <Navbar />
      <div>
        <h1>
          <span className="cursive_design">Espresso </span>
          Your Passion With Personal Linkedin Marketing
        </h1>
      </div>
      <div>
        <p>
          As Your Digital Partners, We Craft Engaging Strategies To Elevate Your
          Presence and Brew Success
        </p>
      </div>

      <div className="you_need_to_adapt">
        <div>{/* <img src="" alt="" /> */}</div>
        <div>
          <p>You Need To </p>
          <p>Adapt,</p>
          <p>Evolve,</p>
          <p>Change,</p>
          <p>TO STAY AHEAD</p>
        </div>
      </div>

      <div className="Linkedin_Services"></div>

      <div className="who_we_are">
        <div>WHO WE ARE</div>
        <div>
          Imagine a Team That’s not just about Marketing but Dedicated to
          Telling Your Story. What Do We Do?
        </div>
      </div>

      <div className="stratezie_engage">
        <p>Stratezie - Engage & Connect</p>
      </div>

      <div className="our_works">
        <p className="headings">OUR WORKS</p>

        <div className="our_works_carosule"></div>

        <div className="our_clients">
          <div className="our_clients_box_cont">
            <div>
              <h1>VEN THANGARAJ</h1>
              <p>Imagine a Team that's not just.....</p>
            </div>
            <div>{/* <img src="" alt="" /> */}</div>
          </div>
          <div className="our_clients_box_cont">
            <div>
              <h1>RICHA BAJAJ</h1>
              <p>Imagine a Team that's not just.....</p>
            </div>
            <div>{/* <img src="" alt="" /> */}</div>
          </div>
          <div className="our_clients_box_cont">
            <div>
              <h1>ANITHA RAGUNATH</h1>
              <p>Imagine a Team that's not just.....</p>
            </div>
            <div>{/* <img src="" alt="" /> */}</div>
          </div>
        </div>
      </div>

      <div className="Linkedin_insight">
        <h1>
          LINKEDIN <br />
          INSIGHT
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Linkedin;
