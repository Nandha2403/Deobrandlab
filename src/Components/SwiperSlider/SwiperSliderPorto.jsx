import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import VirgoImg1 from "../../Images/VirgoSecPortfolio.jpeg";
import VirgoImg2 from "../../Images/VirgoPortfolio.jpeg";
import Dinedesk1 from "../../Images/Dinedeskimg1.jpeg";
import Dinedesk2 from "../../Images/Dinedeskimg2.jpeg";
import Dinedesk3 from "../../Images/Dinedeskimg3.jpeg";
import Lineology1 from "../../Images/LineologyImg1.jpeg";
import Lineology2 from "../../Images/Lineologyimg2.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./SwiperSliderPorto.css";

import { EffectCards } from "swiper/modules";

const SwiperSliderPorto = () => {
  return (
    <div className="SwiperSliderPorto">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Dinedesk1} alt="DineDesk" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dinedesk2} alt="DineDesk" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dinedesk3} alt="DineDesk" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lineology1} alt="Lineology" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lineology2} alt="Lineology" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={VirgoImg1} alt="SLM" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={VirgoImg2} alt="SLM" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSliderPorto;
