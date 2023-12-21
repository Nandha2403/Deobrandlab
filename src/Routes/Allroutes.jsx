import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BrandStrategy from "../Pages/AllServices/BrandingStrategy/BrandStrategy";
import MarketAnalysis from "../Pages/AllServices/MarketAnalysing/MarketAnalysis";
import Linkedin from "../Pages/AllServices/PersonalLinkedin/Linkedin";
import ContactUs from "../Pages/ContactusPage/ContactUs";
import MediaAndFilm from "../Pages/AllServices/MediaAndFilmPage/MediaAndFilm";
import DesignService from "../Pages/AllServices/DesignServicePage/DesignService";
import DigitalMarketing from "../Pages/AllServices/DigitalMarketingPage/DigitalMarketing";
import ContentWriting from "../Pages/AllServices/ContentWritingPage/ContentWriting";
import WebsiteDesign from "../Pages/AllServices/WebsiteDesignPage/WebsiteDesign";

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
        <Route path="/brand-strategy" element={<BrandStrategy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/content-writing" element={<ContentWriting />} />
        <Route path="/design-service" element={<DesignService />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/market-analysis" element={<MarketAnalysis />} />
        <Route path="/media&film" element={<MediaAndFilm />} />
        <Route path="/personal-linkedin" element={<Linkedin />} />
        <Route path="/website-design" element={<WebsiteDesign />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
