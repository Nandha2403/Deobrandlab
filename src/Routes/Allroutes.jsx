import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Service from "../Pages/Service/Service";

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
        <Route path="/services" element={<Service />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
