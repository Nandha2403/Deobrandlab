import React from "react";
import Navbar from "../../Components/Navabar/Navbar";
// import Footer from "../../Components/Footer/Footer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="video_container"></div>
      <div className="brand_identity">
        <h1>"Brand's" Identity with Our Strategic, <br />Performance, and Creative Solutions"</h1>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
