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
import { SlArrowUp } from "react-icons/sl";
import SwiperSliderPorto from "../../Components/SwiperSlider/SwiperSliderPorto";
import AOS from "aos";
import IntroVideo from "../../Components/VideosContainer/IntroVideo";
import DeoIntroVideo from "../../assets/DEO Logo Ani1.mp4";
import "aos/dist/aos.css";
import "./Homepage.css";

const Homepage = () => {
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
      <Navbar />
      <div className="video_container">
        <IntroVideo sample={DeoIntroVideo} />
      </div>
      <div className="brand_identity" data-aos="flip-up">
        <h1>
          "Brand's Identity with Our Strategic, Performance, and
          <br /> Creative Solutions"
        </h1>
      </div>
      <div className="trustedby_cont">
        <p className="headings">TRUSTED BY</p>
        <div>
          <SliderComponent />
        </div>
        {/* <img src={DineDesk} alt={"DineDesk"} /> */}
      </div>

      <div className="Aboutus">
        <p className="headings">About Us</p>
        <div className="Aboutus_txt_cont">
          <p>
            At DEOBRANDLAB, we go beyond marketing. We truly listen, inviting
            you to amplify your brand. With our touch, challenges become
            distinctive opportunities, guided by 'Refresh the way you listen.'
            Our thinkers craft plans tailored to your unique brand. Join us to
            create an unforgettable brand story that resonates uniquely with
            your audience.
          </p>
        </div>
        <div className="Aboutus_we_excel">
          <p data-aos="fade-right" data-aos-duration="2000">
            We Excel at Strategic Planning,
            <br /> Propelling Ambitious Brands to <br /> Rapid Growth
          </p>
        </div>
        <div>
          <h1 data-aos="fade-down" data-aos-duration="2000">
            that's <span className="Spandeobrandlab">DEOBRANDLAB</span>
          </h1>
        </div>
        <div className="btnContainer">
          <button>Explore</button>
        </div>
      </div>
      <div className="what_wedo_for_you_cont">
        <p className="headings">WHAT WE DO FOR YOU!</p>
        <p
          className="what_wedo_for_you_text_lets_create"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          "Let's Create a Unique Brand Story <br />
          that Truly Connects with Your Audience"
        </p>
      </div>
      <div className="design_animate">
        <p className="headings">DESIGN ANIMATE</p>
        {/* <div
          className="design_animate_Location_circle"
          data-aos="fade-down-right"
        >
          <div>
            <ImLocation fontSize={"40px"} color="white" />
          </div>
        </div> */}

        <div className="wrapper">
          <div className="stick">
            <div className="ball"></div>
          </div>
        </div>
        <div className="under_circle_txt" data-aos="fade-down">
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

      <div className="Portfolio">
        <div className="Portfolio_left">
          <SwiperSliderPorto />
        </div>
        <div className="Portfolio_right">
          <p className="headings Portfolio_right_headings">PORTFOLIO</p>
          <h2 data-aos="fade-right" data-aos-duration="2000">
            At DEOBRANDLAB, our journey through industries, from Paints and
            E-commerce to Apparels and Food-Chains, has been defined by a
            personalized touch. We pride ourselves on efficiently navigating
            each process, tailoring strategies that uniquely align with the
            essence of your brand.
          </h2>
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
      <Footer />
    </div>
  );
};

export default Homepage;
