import React from "react";
import Navbar from "../../Components/Navabar/Navbar";
import "./Service.css";

const Service = () => {
  return (
    <div className="Service_parent">
      <div>
        <Navbar />
      </div>

      <div className="Service_top">
        <div className="Service_top_left">
          <p className="Service_top_left_title">
            Coffee Chats, Not Boardroom Talks
          </p>
          <p className="Service_top_left_subtext">
            Swap stiff boardrooms for cozy coffee chats. Let's brew up ideas
            over a latte and give your brand the warmth it deserves.
          </p>
        </div>
        <div className="Service_top_right"></div>
      </div>

      <div className="Service_billion_cont">
        <p>150+ billion company are starting business every year</p>
      </div>

      <div className="What_make_diff">
        <p>What makes you different?</p>
        <div className="What_make_diff_video_cont"></div>
      </div>

      <div className="you_need_and_brand_strategy">
        <div className="you_need">
          <p className="you_need_title">
            You Need Constant Change Unique ideas & Engaging Strategy
          </p>
          <p className="lets_groove">Let's Groove to create</p>
        </div>
        <div className="brand_strategy">
          <p className="brand_strategy_title">Brand Strategy</p>
          <p className="brand_strategy_subtxt">
            Fuel success with our expert brand strategy and cutting-edge
            solutions. Don't settle for mediocrity
          </p>
          <p className="brand_strategy_title">Brand Positioning</p>
          <p className="brand_strategy_subtxt">
            Stand out in today's communication noise. Our team excels in niche
            market research and crafting compelling positioning statements. Let
            us captivate your audience, ensuring your brand leaves a lasting
            impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
