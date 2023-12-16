import React from "react";
import Navbar from "../../../Components/Navabar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import IntroVideo from "../../../Components/VideosContainer/IntroVideo";
import BrandStrategyVideo from "../../../assets/BrandStrategyVideo.mp4";
import BrandStrategyImg from "../../../Images/BrandStrategyImg.jpeg";
import StrategicMessage from "../../../Images/StrategicMessage.jpeg";
import BrandPersonality from "../../../Images/BrandPersonality.jpeg";
import BrandArchitecture from "../../../Images/BrandsArchitectureDevelopment.jpeg";
import NomencultureStrategy from "../../../Images/NomenclatureStrategy.jpeg";
import BrandStrategyCommunicationWorkshop from "../../../Images/BrandStrategyWorkshop.jpeg";
import BrandStrategyBanner from "../../../Images/BrandStrategyBanner.jpeg";
import "./BrandStratergy.css";

const BrandStratergy = () => {
  return (
    <div className="Service_parent">
      <div>
        <Navbar />
      </div>

      <div className="Service_banner">
        <img src={BrandStrategyBanner} alt="BrandStrategyBanner" />
      </div>
      <div className="Service_video">
        <IntroVideo sample={BrandStrategyVideo} />
      </div>
      <div className="coffee_chat_not_bedrooms_talks">
        <p>
          <span className="cursive_design">Coffee</span> Chats &nbsp; &nbsp;
          &nbsp; Not <span className="cursive_design">Boardroom</span>Talks
        </p>
        <div className="coffee_chat_not_bedrooms_talks_under_txt">
          <p>
            Swap Stiff Boardrooms For Cozy Coffee Chats. Lets Brew Up Ideas{" "}
            <br /> Over a Latte and Give Your Brand the Warmth it Deserves
          </p>
        </div>
      </div>
      <div className="Companies_and_Starting">
        <div className="one_fifty_billion">
          <p>150+ Billion</p>
        </div>
        <div className="Companies_and_Starting_below_right">
          <p>
            Companies are Starting <br />
            Business Every Year
          </p>
        </div>
      </div>
      <div className="you_need_constant">
        <p>YOU NEED CONSTANT CHANGE, UNIQUE IDEAS & ENGAGING STRATEGY</p>
      </div>
      <div className="lets_groove">
        <p>
          <span className="orange_outline_text_design">
            Let's Groove To
          </span>
          <span className="cursive_design"> Create</span>
        </p>
      </div>

      <div className="brand_strategy_cont">
        <p className="brand_strategy_title">BRAND STRATEGY</p>
        <div className="brand_strategy_box_cont">
          <div>
            <p>
              Fuel Successs with our Expert Brand Strategy and Cutting-Edge
              Solutions. Don't Settle for Mediocrity.
            </p>
          </div>
          <div>
            <img src={BrandStrategyImg} alt="BrandStrategy" />
          </div>
        </div>
      </div>
      <div className="brand_strategy_cont">
        <p className="brand_strategy_title">STRATEGIC MESSAGING</p>
        <div className="brand_strategy_box_cont">
          <div>
            <p>
              Perfect Positioning is just the Start; Resonance with YourAudience
              is Key. At DEO, we Specialize in Creating a Tailored Blueprint for
              Consistent Brand Communication. Let us help you craft a Powerful,
              Resonant Brand Presence.
            </p>
          </div>
          <div>
            <img src={StrategicMessage} alt="StrategicMessage" />
          </div>
        </div>
      </div>
      <div className="brand_strategy_cont">
        <p className="brand_strategy_title">BRAND PERSONALITY & VOICE</p>
        <div className="brand_strategy_box_cont">
          <div>
            <p>
              At DEO, we go Beyond Conventional barriers. Embracing
              Industry-Proven Brand Archetyping, we mold your Brand's Voice for
              Dependable and Engaging Communication.
            </p>
          </div>
          <div>
            <img src={BrandPersonality} alt="BrandPersonality" />
          </div>
        </div>
      </div>
      <div className="brand_strategy_cont">
        <p className="brand_strategy_title">BRANDS ARCHITECTURE DEVELOPMENT</p>
        <div className="brand_strategy_box_cont">
          <div>
            <p>
              At DEO, we Specialize in Crafting Seamless Customer Experiences.
              Our Expertise helps Design a Structure Aligned with Your Business
              Needs, Propelling Your Brand Forward.
            </p>
          </div>
          <div>
            <img src={BrandArchitecture} alt="BrandArchitecture" />
          </div>
        </div>
      </div>
      <div className="brand_strategy_cont">
        <p className="brand_strategy_title">NOMENCLATURE STRATEGY</p>
        <div className="brand_strategy_box_cont">
          <div>
            <p>
              What is in a Name? We Understand the Power of a Name. Meticulously
              Crafting Names that are Easy to Pronounce, Visually Appealing, and
              Embody Your Brand’s Promise- Because Everything is in a Name.
            </p>
          </div>
          <div>
            <img src={NomencultureStrategy} alt="NomencultureStrategy" />
          </div>
        </div>
      </div>

      <div className="brand_strategy_cont">
        <p className="brand_strategy_title">
          BRAND STRATEGY COMMUNICATION / WORK SHOPS
        </p>
        <div className="brand_strategy_box_cont">
          <div>
            <p>
              We at DEO workshops blend tried- and-true Engaging Activities,
              Fostering idea Exchange, Creative Concept Recording, and Genuine
              Involvement with Your Staff and clients.
            </p>
          </div>
          <div>
            <img
              src={BrandStrategyCommunicationWorkshop}
              alt="BrandStrategyCommunicationWorkshop"
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BrandStratergy;
