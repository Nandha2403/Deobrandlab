import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DineDesk from "../../Images/DineDeskLogo.png";
import RadientSage from "../../Images/RadientSageLogo.png";
import IndianTerrian from "../../Images/IndianTerrian.png";
import Lineology from "../../Images/LineologyLogo.png";
import MRIndustries from "../../Images/MRIndustriesLogo.png";
import SheenLac from "../../Images/SheenLacLogo.png";
import UKR from "../../Images/UKRLogo.png";
import "./SliderComponent.css";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="main_container">
      <Slider {...settings}>
        <div className="container">
          <img src={DineDesk} alt="DineDesk" />
        </div>
        <div className="container">
          <img src={RadientSage} alt="RadientSage" />
        </div>
        <div className="container">
          <img src={Lineology} alt="Lineology" />
        </div>
        <div className="container">
          <img src={IndianTerrian} alt="IndianTerrian" />
        </div>
        <div className="container">
          <img
            style={{ width: "100%" }}
            src={MRIndustries}
            alt="MRIndustries"
          />
        </div>
        <div className="container">
          <img src={SheenLac} alt="SheenLac" />
        </div>
        <div className="container">
          <img src={UKR} alt="UKR" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
