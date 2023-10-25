import React from "react";
import Navbar from "../../Components/Navabar/Navbar";
// import Footer from "../../Components/Footer/Footer";
import "./Homepage.css";
import { Carousel } from "antd";

const Homepage = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Navbar />
      <div className="video_container"></div>
      <div className="brand_identity">
        <h1>
          "Brand's" Identity with Our Strategic, <br />
          Performance, and Creative Solutions"
        </h1>
      </div>
      <div className="trustedby_cont">
        <h1>TRUSTED BY</h1>
        <Carousel autoplay slidesPerRow={3}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
          <div>
            <h3 style={contentStyle}>5</h3>
          </div>
          <div>
            <h3 style={contentStyle}>6</h3>
          </div>
          <div>
            <h3 style={contentStyle}>7</h3>
          </div>
          <div>
            <h3 style={contentStyle}>8</h3>
          </div>
          <div>
            <h3 style={contentStyle}>9</h3>
          </div>
        </Carousel>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
