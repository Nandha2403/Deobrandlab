import React from "react";
import Navbar from "../../../Components/Navabar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import BeInTouch from "../../../Components/BeIntouchContainer/BeInTouch";
import PersonalLinkedin from "../../../Images/personal_linkedin_img.png";
import ContentStrategy from "../../../Images/Content_Strategy.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Linkedin.css";

const Linkedin = () => {
  return (
    <div className="Linkedin_parent">
      <Navbar />
      <div className="espresso_container">
        <p>
          <span className="espresso_cursive_design">Espresso </span>
        </p>
        <p>
          <span className="your_passion_txt">
            Your Passion With Personal Linkedin Marketing
          </span>
        </p>
      </div>
      {/*  */}
      <div className="as_your_digital">
        <p>
          As Your Digital Partners, We Craft Engaging Strategies To Elevate Your
          Presence and Brew Success
        </p>
      </div>

      <div className="you_need_to_adapt_pl">
        <div>
          <img src={PersonalLinkedin} alt={PersonalLinkedin} />
        </div>
        <div className="you_need_to_adapt_pl_right">
          <p>You Need To </p>
          <p className="border_line_txt_pl">Adapt,</p>
          <p className="border_line_txt_pl">Evolve,</p>
          <p className="border_line_txt_pl">Change</p>
          <p>TO STAY AHEAD</p>
        </div>
      </div>

      <div className="Linkedin_Services">
        <p>OUR SERVICES</p>

        <div className="Linkedin_Services_img_cont">
          <div>
            <img src={ContentStrategy} alt="ContentStrategy" />
          </div>
          <div>
            <img src={ContentStrategy} alt="ContentStrategy" />
          </div>
          <div>
            <img src={ContentStrategy} alt="ContentStrategy" />
          </div>
          <div>
            <img src={ContentStrategy} alt="ContentStrategy" />
          </div>
          <div>
            <img src={ContentStrategy} alt="ContentStrategy" />
          </div>
          <div>
            <img src={ContentStrategy} alt="ContentStrategy" />
          </div>
        </div>
      </div>

      <div className="who_we_are">
        <p className="who_we_are_colored_txt">WHO WE ARE</p>
        <p className="who_we_are_question_symbol">?</p>
        <p className="who_we_are_Imagine">
          Imagine a Team That's not just about Marketing but Dedicated to
          Telling Your Story. What Do We Do?
        </p>
      </div>

      <div className="stratezie_engage">
        <p>Stratezie - Engage & Connect</p>
      </div>

      <div className="our_works">
        <p className="headings">OUR WORKS</p>

        <div className="our_works_carosule">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            loop={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="our_clients">
          <p className="headings">OUR CLIENTS</p>

          <div className="our_clients_box_cont">
            <div className="our_clients_txt_cont">
              <p>VEN THANGARAJ</p>
              <p>Imagine a Team that's not just.....</p>
            </div>
            <div>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
          </div>
          <div className="our_clients_box_cont">
            <div className="our_clients_txt_cont">
              <p>RICHA BAJAJ</p>
              <p>Imagine a Team that's not just.....</p>
            </div>
            <div>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
          </div>
          <div className="our_clients_box_cont">
            <div className="our_clients_txt_cont">
              <p>ANITHA RAGUNATH</p>
              <p>Imagine a Team that's not just.....</p>
            </div>
            <div>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="Linkedin_insight">
        <h1 className="headings">
          LINKEDIN <br />
          INSIGHT
        </h1>
      </div>
      <BeInTouch />
      <Footer />
    </div>
  );
};

export default Linkedin;
