import React, { useEffect } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import Branding from "../../Images/Branding.png";
import Design from "../../Images/DesignService.png";
import DigitalMarketing from "../../Images/DigitalMarketing.png";
import Content from "../../Images/ContentWriting.png";
import PersonalLinkedin from "../../Images/PersonalLinkedin.png";
import MarketAnalysis from "../../Images/MarketAnalysis.png";
import WebsiteDesign from "../../Images/WebsiteDesign.png";
import MediaFilm from "../../Images/MediaAndFlim.png";
import Footer from "../../Components/Footer/Footer";
import { ImLocation } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { SlArrowUp } from "react-icons/sl";
import SwiperSliderPorto from "../../Components/SwiperSlider/SwiperSliderPorto";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";
import IntroVideo from "../../Components/Video/IntroVideo";

const Homepage = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const serviceImages = [
    { img: Branding },
    { img: Design },
    { img: DigitalMarketing },
    { img: Content },
    { img: PersonalLinkedin },
    { img: MarketAnalysis },
    { img: WebsiteDesign },
    { img: MediaFilm },
  ];

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
    <div className="parent">
      <div>
        <Navbar />
      </div>
      <div className="video_container">
        <IntroVideo />
      </div>
      <div className="brand_identity">
        <h1>
          "Brand's Identity with Our Strategic, <br />
          <br />
          Performance, and Creative Solutions"
        </h1>
      </div>
      <div className="trustedby_cont">
        <p className="headings">TRUSTED BY</p>
        <SliderComponent />
        {/* <img src={DineDesk} alt={"DineDesk"} /> */}
      </div>
      <div className="what_wedo_for_you_cont">
        <p className="headings">WHAT WE DO FOR YOU!</p>
        <h1>
          "Let's Create a Unique Brand Story <br />
          that Truly Connects with Your Audience"
        </h1>
      </div>
      <div className="design_animate">
        <p className="headings">DESIGN ANIMATE</p>
        <div className="design_animate_Location_circle">
          <div>
            <ImLocation fontSize={"40px"} color="white" />
          </div>
        </div>
        <div className="under_circle_txt">
          <p>Brand Identity + Strategic Media = Positive Results</p>
        </div>
      </div>
      <div className="services">
        <p className="headings">SERVICES</p>
        <div className="services_img_container">
          {serviceImages.map((data, ind) => (
            <img src={data.img} alt="img" key={ind} />
          ))}
        </div>
      </div>
      <div className="Aboutus">
        <p className="headings">About Us</p>
        <h1>
          We Excel at Strategic Planning,
          <br /> Propelling Ambitious Brands to <br /> Rapid Growth
        </h1>
        <div>
          <h1>
            that's <span className="Spandeobrandlab">DEOBRANDLAB</span>
          </h1>
        </div>
        <div className="btnContainer">
          <Button>Explore</Button>
        </div>
      </div>
      <div className="Portfolio">
        <div className="Portfolio_left">
          <SwiperSliderPorto />
        </div>
        <div className="Portfolio_right">
          <p className="headings">PORTFOLIO</p>
          <h1>
            Created new <br /> Brand Identity <br /> for RadiantSage
          </h1>
        </div>
      </div>
      <div className="We">
        <div className="WE_Text_Cont">
          <p
            className="WE_without_color"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            WE
          </p>
          <p className="WE_with_color">WE</p>
          <p
            className="WE_without_color third_WE"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            WE
          </p>
        </div>
        <div className="We_right" data-aos="fade-up">
          <h1>Craft Engaging Stories</h1>
          <h1>Design Seamless Experience</h1>
          <h1>Produce Compelling Visuals</h1>
          <h1>Simplify Complex Message</h1>
          <h1>Optimise Growth</h1>
          <h1>Develop Strategy</h1>
        </div>
      </div>
      <div className="below_We">
        <div className="below_We_text_cont">
          <h1>
            Let us take you <br /> further than you've <br /> ever been
          </h1>
        </div>
        <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        // }}
        >
          {/* <button className="BeInTouchBtn">
            Be In Touch
            <BsArrowRight />
          </button> */}
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ fontSize: "19px" }}
          >
            Be In Touch
            <ArrowRightOutlined style={{ fontSize: "19px", color: "white" }} />
          </Button>
        </div>
        <div className="arrowCont">
          <button onClick={scrollToTop}>
            <SlArrowUp fontSize={"35px"} color="black" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
