import React from "react";
import Navbar from "../../../Components/Navabar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ConsumerProfiling from "../../../Images/ConsumerProfiling.jpeg";
import ConsumerInsights from "../../../Images/ConsumerInsight.jpeg";
import CampaginRecommendation from "../../../Images/CampaignRecommendation.jpeg";
import DigitalServey from "../../../Images/DigitalSurvey.jpeg";
import QualitativeInterview from "../../../Images/QualatativeInterviews.jpeg";
import CampaginIdeas from "../../../Images/CampaignIdeas.jpeg";
import IndustryAnalysis from "../../../Images/IndustryAnalysis.jpeg";
import DerivingInsights from "../../../Images/DerivingInsights.jpeg";
import IntroVideo from "../../../Components/VideosContainer/IntroVideo";
import MarketAnalysisVideo from "../../../assets/Market_Analysis_Video.mp4";
import MarketAnalysisBanner from "../../../Images/MarketAnalysisBanner.jpeg";
import "./MarketAnalysis.css";
import BeInTouch from "../../../Components/BeIntouchContainer/BeInTouch";

const MarketAnalysis = () => {
  return (
    <div className="market_analysis_parent">
      <Navbar />

      <div className="coffee_in_hand_stratergy_on_demand">
        <p>
          <span className="cursive_design">Coffee</span> in hand &nbsp; &nbsp;
          &nbsp; <span className="cursive_design">Stratergy</span> on Demand
        </p>
        <div className="coffee_in_hand_stratergy_on_demand_under_txt">
          <p>
            Coffee in Hand, Strategy on Demand.We Take Care of Market Research,
            Ensuring Your Cup is Filled with the Insights You Need.
          </p>
        </div>
      </div>

      {/* Img */}
      <div className="market_analysis_topImg_cont">
        <img src={MarketAnalysisBanner} alt="MarketAnalysis" />
      </div>

      {/*  */}
      <div className="under_market_analysis_topImg_text">
        <div>
          <p>
            The Arrival of the New Decade marks 100Year’s in the History of
            Market Research and What a Rollercoaster of a Time it’s been!
          </p>
        </div>
        <div>
          <p>
            It’s taken us from Laboratories Door-to-Door Surveying Projects that
            took weeks to Complete Through to Today’s Digital Tools that can
            Deliver results in Hour’s.
          </p>
        </div>
        <div>
          <p>
            Your Job as a Marketing or Insights Professional Today has been made
            Unimaginably easier thanks to the Pioneers who went Before You.
            Write it Differently!.
          </p>
        </div>
      </div>

      <div className="you_need_to_adapt_ma">
        <p>
          YOU NEED TO{" "}
          <span className="orange_outline_text_design">
            Adapt, Evolve, Change
          </span>{" "}
          TO STAY AHEAD
        </p>
      </div>

      <div className="we_help_you">
        <p>
          We Help You To Understanding The Needs, Preferences, and behaviours of
          Consumers at the Core with Effective Research.
        </p>
      </div>

      <div className="market_analysis_video_cont">
        <IntroVideo sample={MarketAnalysisVideo} />
      </div>

      <div className="market_analysis_cont">
        <p className="market_analysis_title">CONSUMER PROFILING</p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              Fuel Successs with our Expert Brand Strategy and Cutting-Edge
              Solutions. Don’t Settle for Mediocrity.
            </p>
          </div>
          <div>
            <img src={ConsumerProfiling} alt="ConsumerProfiling" />
          </div>
        </div>
      </div>
      <div className="market_analysis_cont">
        <p className="market_analysis_title">CONSUMER INSIGHT</p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              Stand Out in Today’s Communication Noise. Our Team Excels in Niche
              Market Research and Crafting Compelling Positioning Statements.
              Let Us Captivative Your Audience, Ensuring Your Brand Leaves a
              Lasting Impression.
            </p>
          </div>
          <div>
            <img src={ConsumerInsights} alt="ConsumerInsights" />
          </div>
        </div>
      </div>
      <div className="market_analysis_cont">
        <p className="market_analysis_title">CAMPAIGN RECOMMENDATION</p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              Perfect Positioning is just the Start; Resonance with YourAudience
              is Key. At DEO, we Specialize in Creating a Tailored Blueprint for
              Consistent Brand Communication. Let us help you craft a Powerful,
              Resonant Brand Presence.
            </p>
          </div>
          <div>
            <img src={CampaginRecommendation} alt="CampaginRecommendation" />
          </div>
        </div>
      </div>
      <div className="market_analysis_cont">
        <p className="market_analysis_title">DIGITAL SURVEY</p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              At DEO, we go Beyond Conventional barriers. Embracing
              Industry-Proven Brand Archetyping, we mold your Brand’s Voice for
              Dependable and Engaging Communication.
            </p>
          </div>
          <div>
            <img src={DigitalServey} alt="DigitalServey" />
          </div>
        </div>
      </div>
      <div className="market_analysis_cont">
        <p className="market_analysis_title">QUALITATIVE INTERVIEWS</p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              At DEO, we Specialize in Crafting Seamless Customer Experiences.
              Our Expertise helps Design a Structure Aligned with Your Business
              Needs, Propelling Your Brand Forward.
            </p>
          </div>
          <div>
            <img src={QualitativeInterview} alt="QualitativeInterview" />
          </div>
        </div>
      </div>
      <div className="market_analysis_cont">
        <p className="market_analysis_title">CAMPAIGN IDEAS</p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              What is in a Name? We Understand the Power of a Name. Meticulously
              Crafting Names that are Easy to Pronounce, Visually Appealing, and
              Embody Your Brand’s Promise- Because Everything is in a Name.
            </p>
          </div>
          <div>
            <img src={CampaginIdeas} alt="CampaginIdeas" />
          </div>
        </div>
      </div>
      <div className="market_analysis_cont">
        <p className="market_analysis_title">INDUSTRY ANALYSIS</p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              We at DEO workshops blend tried- and-true Engaging Activities,
              Fostering idea Exchange, Creative Concept Recording, and Genuine
              Involvement with Your Staff and clients.
            </p>
          </div>
          <div>
            <img src={IndustryAnalysis} alt="IndustryAnalysis" />
          </div>
        </div>
      </div>
      <div className="market_analysis_cont">
        <p className="market_analysis_title">
          DERIVING INSIGHTS FROM PRE PRESENTED DATA
        </p>
        <div className="market_analysis_box_cont">
          <div>
            <p>
              We at DEO workshops blend tried- and-true Engaging Activities,
              Fostering idea Exchange, Creative Concept Recording, and Genuine
              Involvement with Your Staff and clients.
            </p>
          </div>
          <div>
            <img src={DerivingInsights} alt="DerivingInsights" />
          </div>
        </div>
      </div>
      <BeInTouch />
      <Footer />
    </div>
  );
};

export default MarketAnalysis;
