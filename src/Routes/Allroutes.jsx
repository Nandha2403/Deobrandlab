import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BrandStratergy from "../Pages/AllServices/BrandingStratergy/BrandStratergy";
import MarketAnalysis from "../Pages/AllServices/MarketAnalysing/MarketAnalysis";
import Linkedin from "../Pages/AllServices/PersonalLinkedin/Linkedin";

const Allroutes = () => {
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/brand-stratergy" element={<BrandStratergy />} />
        <Route path="/market-analysis" element={<MarketAnalysis />} />
        <Route path="/personal-linkedin" element={<Linkedin />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
