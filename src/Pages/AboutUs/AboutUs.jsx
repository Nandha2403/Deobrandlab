import React, { useEffect } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import OurTeam from "../../Images/OurTeam.png";
import Footer from "../../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Aboutus_parent">
      <Navbar />

      <div className="top_section" data-aos="fade-right">
        <p className="IntroTitle">
          Building better brands to reach to their potential
        </p>
        <p className="under_intro_title">
          We are your partners in progress. Our agency is dedicated to
          addressing the unique challenges of those seeking innovation and
          change. DEO is here to tailor solutions that precisely cater to your
          needs, propelling your growth in the right direction.
        </p>
      </div>

      {/* img */}
      <div className="Image_container" data-aos="fade-down">
        <img src={OurTeam} alt="OurTeam" />
      </div>
      <div className="Our_vision" data-aos="fade-right">
        <p className="Our_vision_title title">OUR VISION</p>
        <div className="under_Our_vision_title">
          <p>
            At DEO, we don't just hear you; we listen. Our mission is to uncover
            your latent potential in the market. We specialize in crafting a
            robust social presence, ensuring your growth becomes a journey to
            new heights.
          </p>
          <p className="under_Our_vision_textpara">
            “DEO is your catalyst for reaching and resonating with the masses.
            Your success story starts here”
          </p>
        </div>
      </div>
      <div className="Who_We_Are">
        <p className="Who_We_Are_title title">Who We Are</p>
        <div className="Who_We_Are_title_under">
          <p>
            At DEO we are passionate storytellers and content creators. With a
            commitment to quality and creativity, we specialize in producing
            engaging content that captivates audiences. Whether it's written
            articles, multimedia presentations, or social media campaigns, we
            take pride in delivering content that resonates and leaves a lasting
            impression.
          </p>
        </div>
      </div>

      <div className="richa_banner">{/* <img src="" alt="" /> */}</div>
      <div className="list_container">
        <ul>
          <li>
            Proven Insight Mining Experiences Across Business Verticals –
            Healthcare, FMCG, Tourism, Financial Services, Real Estate And
            Media, Worked Across JWT, McCann, DDB Mudra.
          </li>
          <li>
            KEY CLIENTS : ITC Aashirvaad , Britannia GoodDay , J&J Accuview ,
            Nestle NAN , Ireland Tourism , UTI & Morgan Stanley Mutual Fund ,
            Wipro – Santoor & more.
          </li>
          <li>
            Honoured with McCann Planning Excellence Awards by Prasoon Joshi ,
            Chairman Asia Pacific , Chairman CBFC.
          </li>
          <li>
            Has an Ecommerce Start Up which Brings Indian and Western Mysticism
            Under One Roof : #LINEOLOGY.
          </li>
        </ul>
      </div>

      <div className="Core_Team_Container">
        <p className="Core_Team_title title">CORE TEAM</p>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              alt="img"
            />
          </div>
          <div className="Core_Team_text_container">
            <p>
              4 Year’s of Expertise in Digital Marketing & Sales , Ed tech , &
              Product , Advertising
            </p>
            <p>
              Proven Insight Mining Experiences Across Business Verticals –
              Healthcare, FMCG, Tourism, Financial Services, Real Estate And
              Media, Worked Across JWT, McCann, DDB Mudra.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text_two">
          <div className="Core_Team_img_container_two">
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              alt="img"
            />
          </div>
          <div className="Core_Team_text_container_two">
            <p>
              4 Year’s of Expertise in Digital Marketing & Sales , Ed tech , &
              Product , Advertising
            </p>
            <p>
              Proven Insight Mining Experiences Across Business Verticals –
              Healthcare, FMCG, Tourism, Financial Services, Real Estate And
              Media, Worked Across JWT, McCann, DDB Mudra.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              alt="img"
            />
          </div>
          <div className="Core_Team_text_container">
            <p>
              4 Year’s of Expertise in Digital Marketing & Sales , Ed tech , &
              Product , Advertising
            </p>
            <p>
              Proven Insight Mining Experiences Across Business Verticals –
              Healthcare, FMCG, Tourism, Financial Services, Real Estate And
              Media, Worked Across JWT, McCann, DDB Mudra.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text_two">
          <div className="Core_Team_img_container_two">
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              alt="img"
            />
          </div>
          <div className="Core_Team_text_container_two">
            <p>
              4 Year’s of Expertise in Digital Marketing & Sales , Ed tech , &
              Product , Advertising
            </p>
            <p>
              Proven Insight Mining Experiences Across Business Verticals –
              Healthcare, FMCG, Tourism, Financial Services, Real Estate And
              Media, Worked Across JWT, McCann, DDB Mudra.
            </p>
          </div>
        </div>
        <div className="Core_Team_img_and_text">
          <div className="Core_Team_img_container">
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              alt="img"
            />
          </div>
          <div className="Core_Team_text_container">
            <p>
              4 Year’s of Expertise in Digital Marketing & Sales , Ed tech , &
              Product , Advertising
            </p>
            <p>
              Proven Insight Mining Experiences Across Business Verticals –
              Healthcare, FMCG, Tourism, Financial Services, Real Estate And
              Media, Worked Across JWT, McCann, DDB Mudra.
            </p>
          </div>
        </div>
      </div>
      <div className="your_success">
        <p>Your success story begins with us.</p>
      </div>

      <div className="Aboutus_footer_cont">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
