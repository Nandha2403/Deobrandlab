import React, { useEffect } from "react";
import AOS from "aos";
import { SlArrowUp } from "react-icons/sl";
import "aos/dist/aos.css";
import "./BeInTouch.css";

const BeInTouch = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="below">
      <div className="below_text_cont">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          Let us take you <br /> further than you've <br /> ever been
        </h1>
        <div className="be_in_touch_btn_cont">
          <button class="link style-7">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Be In Touch</span>
          </button>
        </div>
      </div>
      <div className="arrowCont">
        <button onClick={scrollToTop}>
          <SlArrowUp fontSize={"35px"} color="black" />
        </button>
      </div>
    </div>
  );
};

export default BeInTouch;
